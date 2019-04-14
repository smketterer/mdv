<template>
  <screen ref="screen" :smartCSR="true" :autoPadding="true">
    <text top="0" left="center" :top="2" :content="`${ this.pageTitle }`" />
    <box :border="{ type: 'line', ch: '@' }" :top="this.pageTitle ? 4 : 2" :bottom="2" :left="4" :right="4" >
      <box ref="content" @click="nextSlide" :top="1" :bottom="1" :left="2" :right="2" :autofocus="true" :style="contentStyle" :alwaysScroll="true" :scrollable="true" :mouse="true" :keys="true" :vi="true" :content="this.pageContent" />
    </box>
  </screen>
</template>

<script>
const fs = require('fs')
const marked = require('marked')
const TerminalRenderer = require('marked-terminal')

marked.setOptions({
  renderer: new TerminalRenderer()
})

export default {
  name: 'app',
  computed: {
    contentStyle: function() {
      return {
        hover: {
          // bg: 'gray'
        },
      }
    }
  },
  data: function() {
    return {
      page: 0,
      pages: [],
      pageTitle: '',
      pageContent: '',
    }
  },
  mounted: function() {
    // Close the program when CTRL+C is pressed.
    this.$refs.screen.key(['C-c', 'escape'], () => {
      process.exit(0)
    })

    this.$refs.content.focus()

    // Error if no file provided.
    if (typeof process.argv[2] === 'undefined') {
      throw new Error("No file provided.")
    }

    // Read file with UTF-8 encoding, splitting it into pages based on !!!
     fs.readFile(process.argv[2], 'utf8', (err, contents) => {
       // Generates SGR sequences which can be read by blessed.
       this.pages = contents.split('!!!').slice(1)
       this.pageTitle = marked(this.pages[0].split(/\n/)[0])
       this.pageContent = marked(this.pages[0].split(/\n/).slice(1).join('\n'))
     })

    this.$refs.screen.key(['right', 'space'], () => {
      this.nextSlide()
    })
    this.$refs.screen.key(['left'], () => {
      this.prevSlide()
    })
  },
  methods: {
    prevSlide() {
      if (this.page > 0) {
        this.page -= 1
        this.pageTitle = marked(this.pages[this.page].split(/\n/)[0])
        this.pageContent = marked(this.pages[this.page].split(/\n/).slice(1).join('\n'))
      }
    },
    nextSlide() {
      if (this.page < this.pages.length - 2) {
        this.page += 1
        this.pageTitle = marked(this.pages[this.page].split(/\n/)[0])
        this.pageContent = marked(this.pages[this.page].split(/\n/).slice(1).join('\n'))
      }
    }
  }
}
</script>

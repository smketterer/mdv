<template>
  <screen ref="screen" :smartCSR="true" :autoPadding="true" :title="`${ this.file }`">
    <box style="bg: white" :top="0" :left="0" :height="'100%'" :width="'100%'">
      <text style="bg: white; fg: black; bold: true;" top="0" left="center" :content="`file: ${ this.file }`" />
    </box>
    <box :top="1" :left="0" height="100%" width="100%" :border="{ type: 'bg' }" :alwaysScroll="true" :scrollable="true" :mouse="true" :content="this.fileContents" />
  </screen>
</template>

<script>
var fs = require('fs')
var marked = require('marked')
var TerminalRenderer = require('marked-terminal')

marked.setOptions({
  renderer: new TerminalRenderer()
})

export default {
  name: 'app',
  data: function() {
    return {
      file: '',
      fileContents: '',
    }
  },
  mounted: function() {
    // Close the program when CTRL+C is pressed.
    this.$refs.screen.key(['C-c'], () => {
      process.exit(0)
    })

    // Set the file
    this.file = process.argv[2]

    // Read file with UTF-8 encoding
     fs.readFile(`./${ this.file }`, 'utf8', (err, contents) => {
       this.fileContents = marked(contents)
     })
    // console.log(marked(this.fileContents))
  }
}
</script>

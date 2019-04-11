<template>
  <screen ref='screen' :smartCSR="true" :keys="true">
    <markdown :markdown="msg"></markdown>
  </screen>
</template>

<script>
export default {
  name: 'app',
  computed: {
  },
  data () {
    return {
      msg: ' # Hello \n blessed-contrib renders markdown using `marked-terminal`'
    }
  }
}
</script>

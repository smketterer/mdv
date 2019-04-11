<template>
  <screen ref='screen' :smartCSR="true" :keys="true">
    <text>{{ msg }}</text>
  </screen>
</template>

<script>
export default {
  name: 'app',
  computed: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

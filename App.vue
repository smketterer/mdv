<template>
  <screen ref='screen' :smartCSR="true" :keys="true">
    {{ msg }}
  </screen>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

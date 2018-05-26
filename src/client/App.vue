<template>
  <div class="app">
    <router-link :to="{ name: 'hello' }">Gotoaa Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less">

</style>
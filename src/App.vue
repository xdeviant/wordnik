<template>
  <div id="app">
    <TheHeader/>
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
</style>

<template>
  <div class="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
<style lang="scss">
  body {
    background-color: whitesmoke;
  }
</style>

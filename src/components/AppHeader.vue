<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <ul class="app-header__list">
        <li class="app-header__list-item">
          <RouterLink
            v-for="route in links"
            :key="route.name"
            :to="{ name: route.name || route.meta.defaultName }"
            exact
          >
            {{ route.meta.displayName }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import routes from '@/routes'
export default {
  name: 'AppHeader',
  data () {
    return {
      routes
    }
  },
  computed: {
    links () {
      return this.routes.filter(route => route.meta.displayName)
    }
  }
}
</script>

<style lang="scss">
  .app-header {
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
    background-color: white;
    height: 56px;

    &__nav {
      display: flex;
      flex: 1;
    }

    &__list {
      display: flex;
      flex: 1;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &__list-item {
      //
    }
  }
</style>

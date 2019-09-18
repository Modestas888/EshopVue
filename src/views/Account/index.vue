<template>
  <div class="account">
    <h1>Account</h1>
    <RouterLink :to="{ name: 'Account:Profile' }">
      Profile
    </RouterLink>
    <RouterLink :to="{ name: 'Account:Settings' }">
      Settings
    </RouterLink>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'AccountView',
  mounted () {
    console.log(this.$route.name)
  }
}
</script>

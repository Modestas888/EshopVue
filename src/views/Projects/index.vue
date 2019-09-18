<template>
  <div class="projects">
    {{ projects }}
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data () {
    return {
      projects: []
    }
  },
  async beforeRouteEnter (to, from, next) {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts'
    )
    const projects = await response.json()
    next(vm => {
      vm.projects = projects
    })
  }
}
</script>

<style>
</style>

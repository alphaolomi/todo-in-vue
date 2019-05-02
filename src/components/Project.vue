// Project.vue

<template>
    <div>
        <p>{{ projects[$route.params.id].id }}</p>
        <p>{{ projects[$route.params.id].title }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Project',
  mounted () {
    this.$store.dispatch('loadProjects')
  },
  computed: mapState([
    'projects'
  ])
}

</script>
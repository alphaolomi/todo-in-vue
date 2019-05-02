<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.title }}</td>
          <td>{{ project.completed }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PRoejcts',
  mounted () {
    this.$store.dispatch('loadProjects')
  },
  computed: mapState([
    'projects'
  ])
}

</script>
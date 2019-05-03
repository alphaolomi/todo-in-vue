// Project.vue

<template>
    <div class="mx-auto container mt-6 self-center">
      <div class=" rounded overflow-hidden shadow-lg my-2">
  <img class="max-w-xs" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ projects[$route.params.id].title }}</div>
   

  </div>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Project',
  mounted () {
    this.$store.dispatch('FETCH_PROJECTS')
  },
  computed: mapState([
    'projects'
  ])
}

</script>
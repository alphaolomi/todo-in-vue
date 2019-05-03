<template>
  <div class>
    <div class="mx-auto">
      <div class="bg-white shadow-md rounded my-12">
        <table class="text-left w-full border-collapse">
          <thead>
            <tr>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >Id</th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >title</th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >Completed</th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-grey-lighter" v-for="project in projects" :key="project.id" >
            
              <td class="py-4 px-6 border-b border-grey-light">{{ project.id }}
              </td>
              <td class="py-4 px-6 border-b border-grey-light"><a :href="'projects/'+project.id" class="text-grey-darker no-underline font-bold">{{ project.title }}</a></td>
              <td class="py-4 px-6 border-b border-grey-light">{{ project.completed }}</td>
              <td class="border-b border-grey-light">
                <a
                  href="#"
                  class="text-grey-lighter no-underline font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                >Edit</a>
                <a
                  href="#"
                  class="text-grey-lighter no-underline font-bold py-1 px-3 mx-1 rounded text-xs bg-blue hover:bg-blue-dark"
                >View</a>
                <a
                  href="#"
                  class="text-grey-lighter no-underline font-bold py-1 px-3  rounded text-xs bg-red hover:bg-red-dark"
                >Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     <div class="w-1/3 mx-auto">
        <ul class="flex list-reset border border-grey-light rounded w-auto font-sans mx-auto">
        <li>
          <a
            class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
            href="#"
          >Previous</a>
        </li>
        <li>
          <a
            class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
            href="#"
          >1</a>
        </li>
        <li>
          <a
            class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
            href="#"
          >2</a>
        </li>
        <li>
          <a class="block text-white bg-blue border-r border-blue px-3 py-2" href="#">3</a>
        </li>
        <li>
          <a class="block hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">Next</a>
        </li>
      </ul>
     </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Projects",
  mounted() {
    this.$store.dispatch("FETCH_PROJECTS");
  },
  computed: mapState(["projects"])
};
</script>
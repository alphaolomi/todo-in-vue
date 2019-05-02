// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        projects: []
    },
    actions: {
        loadProjects ({ commit }) {
            axios
              .get('https://jsonplaceholder.typicode.com/todos')
              .then(r => r.data)
              .then(projects => {
              console.log(projects)
              })
          }
    },
    mutations: {
        SET_PROJECTS (state, projects) {
            state.projects = projects
          }
    }
})
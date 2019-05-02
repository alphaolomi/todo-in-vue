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
        FETCH_PROJECTS({ commit }) {
            axios
                .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(r => r.data)
                .then(projects => {
                    commit('SET_PROJECTS', projects)
                })
        },
        ADD_NEW_PROJECT({ commit }, userId, title, completed) {
            axios.post('https://jsonplaceholder.typicode.com/todos', { userId, title, completed })
                .then(r => r.data)
                .then(project => {
                    commit('ADD_PROJECT', { project })
                }).catch()
        },

    },
    mutations: {
        SET_PROJECTS(state, projects) {
            state.projects = projects
        },
        ADD_PROJECT(state, project) {
            state.projects.push(project)
        },

    }
})
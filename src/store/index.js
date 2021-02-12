import Vue from 'vue'
import Vuex from 'vuex'
// import db from '@/fb'
// import { parseISO, format } from 'date-fns'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false
      }
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  mutations: {
    addTask (state, newTaskTitle) {
      state.tasks.push(newTaskTitle)
    },

    showSnackbar (state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },

    deleteTask (state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },

    hideSnackbar (state) {
      state.snackbar.show = false
    }
  },

  actions: {
    addTask ({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },

    hideSnackbar ({ commit }) {
      commit('hideSnackbar')
    },

    deleteTask ({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    }
  },

  getters: {
    tasksAll: state => state.tasks,
    snackbar: state => state.snackbar
    // taskById: s => id => s.tasks.find(t => t.id === id)
  }
})

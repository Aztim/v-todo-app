import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/fb'
import { parseISO, format } from 'date-fns'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    SET_DATA_TO_STATE: (state, task) => {
      state.tasks = task
    },
    DELETE_ITEM_FROM_CART: (state, id) => {
      db.collection('task').doc(id).delete()
    }
  },
  actions: {
    GET_TASK_FROM_FIREBASE ({ commit }) {
      db.collection('task').get().then((querysnapshot) => {
        const task = []
        querysnapshot.docs.forEach(doc => {
          const data = {
            id: doc.id,
            description: doc.data().description,
            due: doc.data().due ? format(parseISO(doc.data().due), 'do MMM yyyy') : '',
            status: new Date(doc.data().due) < new Date() ? 'overdue' : doc.data().status,
            title: doc.data().title
          }
          task.push(data)
        })
        commit('SET_DATA_TO_STATE', task)
      })
    },
    DELETE_FROM_CART ({ commit }, id) {
      commit('DELETE_ITEM_FROM_CART', id)
    }
  },
  getters: {
    tasks: (state) => state.tasks
    // taskById: s => id => s.tasks.find(t => t.id === id)
  }
})

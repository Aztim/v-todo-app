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
    SET_DATA_TO_STATE: (state, data) => {
      state.tasks.push(data)
    }
  },
  actions: {
    GET_TASK_FROM_FIREBASE ({ commit }) {
      db.collection('task').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          const data = {
            id: doc.id,
            description: doc.data().description,
            due: doc.data().due ? format(parseISO(doc.data().due), 'do MMM yyyy') : '',
            status: new Date(doc.data().due) < new Date() ? 'overdue' : doc.data().status,
            title: doc.data().title
          }
          console.log(data)
          commit('SET_DATA_TO_STATE', data)
        })
      })
    }
  },
  getters: {
    tasks: (state) => state.tasks
  }
})

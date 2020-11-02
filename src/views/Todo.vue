<template>
  <div>
    <v-container class="my-10">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text color="grey" class="mb-3" @click="sortBy('title')">
            <v-icon >mdi-folder</v-icon>
            <span class="text-lowercase">by title</span>
          </v-btn>
        </template>
        <span>Sort projects by title</span>
      </v-tooltip>

      <v-col cols="1">
        <v-select
          :items="items"
          label="Status"
          dense
          v-model="filter"
        ></v-select>
      </v-col>
       <v-card flat class="pa-5" v-for="task of displayTasks" :key="task.id">
        <v-layout  wrap :class="`pa-3 task ${task.status}`">
          <v-flex xs12 md3>
            <div class="caption grey--text">Task</div>
            <div>{{task.title}}</div>
          </v-flex>

          <v-flex xs6 sm4 md4>
             <div class="caption grey--text">Description</div>
             <div>{{task.description}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Due by</div>
             <div>{{task.due}}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <v-chip
              id="v-chip"
              :class="`${task.status} white--text caption my-2`"
              small
            >{{task.status}}
            </v-chip>
          </v-flex>

          <v-flex xs2 sm4 md1  class="d-flex justify-end">
            <v-btn
              icon
              :to="'/task/' + task.id"
            >
              <v-icon color="grey lighten-1">mdi-folder</v-icon>
            </v-btn>
            <v-btn
              @click="deleteTask(task.id)"
              icon
            >
              <v-icon color="grey lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newTaskTitle: '',
      items: ['all', 'complete', 'ongoing', 'overdue'],
      filter: null
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.tasks
    },
    displayTasks () {
      return this.tasks.filter(t => {
        if (!this.filter || this.filter === 'all') { /* Если ничего нет,то возвращаем true и показывает все задачи */
          return true
        }
        return t.status === this.filter
      })
    }
  },
  methods: {
    addTask () {
      const newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false
      }
      this.tasks.push(newTask)
    },
    doneTask (id) {
      const task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    // deleteTask (id) {
    //   db.collection('task').doc(id).delete()
    // },
    sortBy (prop) {
      this.tasks.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created () {
    // this.GET_PRODUCTS_FROM_API()
    this.$store.dispatch('GET_TASK_FROM_FIREBASE')
  // db.collection('task').onSnapshot(res => {
  //   const changes = res.docChanges()
  //   changes.forEach(change => {
  //     if (change.type === 'added') {
  //       this.tasks.push({
  //         ...change.doc.data(),
  //         id: change.doc.id
  //       })
  //     }
  //   })
  }
}
</script>

<style scoped>
  .task.complete{
    border-left: 4px solid#64B5F6;
  }

  .task.ongoing{
    border-left: 4px solid #FFCC80;
  }

  .task.overdue{
    border-left: 4px solid #FF0000;
  }

#v-chip.complete{
   background-color: #64B5F6;
}
#v-chip.ongoing{
   background-color: #FFD700;
}
#v-chip.overdue{
   background-color: #FF0000;
}
</style>

<template>
  <!--<div class="home"> -->
    <!-- <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Append"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field> -->
  <div>
      <!-- `<v-list
        class="pt-0"
        flat
      >
        <div
          v-for="task in tasks"
          :key="task.id"
        >
          <v-list-item
            @click="doneTask(task.id)"
            :class="{'light-blue lighten-5' : task.done}"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{'text-decoration-line-through'
                  :task.done}"
                > {{ task.title }}
                </v-list-item-title>
                <v-list-item-title>`
                  {{ task.title }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  @click="deleteTask(task.id)"
                  icon
                >
                  <v-icon color="grey lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list> -->

    <v-container class="my-10">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text color="grey" class="mb-3" @click="sortBy('title')">
            <v-icon >mdi-folder</v-icon>
            <span class="text-lowercase">by task</span>
          </v-btn>
        </template>
        <span>Sort projects by task</span>
      </v-tooltip>
<!--
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text color="grey" class="mb-3" @click="sortBy('status')">
          <v-icon >mdi-account</v-icon>
          <span class="text-lowercase">by status</span>
        </v-btn>
      </template>
      <span>Sort projects by status</span>
    </v-tooltip> -->
      <v-col cols="1">
        <v-select
          :items="items"
          label="Status"
          dense
          v-model="filter"
        ></v-select>
      </v-col>
       <v-card flat class="pa-5" v-for="task in displayTasks" :key="task.id">
        <v-layout  wrap :class="`pa-3 task ${task.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Task</div>
            <div>{{task.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Description</div>
             <div>{{task.description}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Due by</div>
             <div>{{task.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip
                id="v-chip"
                :class="`${task.status} white--text caption my-2`"
                small
              >{{task.status}}
              </v-chip>
            </div>
          </v-flex>
          <!-- <v-flex xs2 sm4 md2>
            <v-row justify="space-around">
              <v-chip
                id="v-chip"
                :class="`${task.status} white--text caption my-2`"
                small
              >{{task.status}}
              </v-chip>
              <v-icon @click="remove(task.id)">mdi-delete-forever</v-icon>
            </v-row>
          </v-flex> -->
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
      tasks: [
        {
          id: 1,
          title: 'Take a shower',
          description: 'Тест!!!',
          // due: -,
          status: 'complete',
          done: false
        },
        {
          id: 2,
          title: 'Shower',
          description: 'Тест!!!',
          // due: -,
          status: 'ongoing',
          done: false
        },
        {
          id: 4,
          title: 'hower',
          description: 'Тест!!!',
          // due: -,
          status: 'overdue',
          done: false
        }
      ],
      items: ['all', 'complete', 'ongoing', 'overdue'],
      filter: null
    }
  },
  computed: {
    displayTasks () {
      return this.tasks.filter(t => {
        if (!this.filter || this.filter === 'all') { /* Если ничего нет,то возвращаем true и показывает все задачи */
          return true
        }
        console.log(this.filter)
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
    deleteTask (id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    sortBy (prop) {
      this.tasks.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
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

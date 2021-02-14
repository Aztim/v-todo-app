<template>
  <div>
    <v-container class="my-10">
      <v-list
        v-if="tasks.length"
        class="pt-0"
        flat
      >
        <div
          v-for="task in tasks"
          :key="task.id"
        >
          <v-list-item
            @click="doneTask(task.id)"
            :class="{ 'blue lighten-5' : task.done }"
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
                  :class="{ 'text-decoration-line-through' : task.done }"
                >
                  {{ task.title }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action >
                <v-list-item-action-text>
                  <v-icon small>mdi-calendar</v-icon>
                  {{ task.dueDate | formattedDate }}
                </v-list-item-action-text>
              </v-list-item-action>

              <v-list-item-action>
                <TaskMenu
                  :task="task"
                />
              </v-list-item-action>
            </template>

          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
      <div
        v-else
        class="no-tasks"
      >
        <v-icon
          size="100"
          color="primary"
        >
          mdi-check
        </v-icon>
        <div class="text-h5 primary--text">No tasks</div>
      </div>
    </v-container>
  </div>
</template>

<script>
import TaskMenu from '@/components/TaskMenu'
import { mapGetters } from 'vuex'
import { format } from 'date-fns'

export default {
  name: 'Todo',
  components: { TaskMenu },
  data () {
    return {
      // newTaskTitle: '',
      // items: ['all', 'complete', 'ongoing', 'overdue'],
      // filter: null
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'tasksFiltered'
    })
  },
  methods: {
    doneTask (id) {
      const task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    }
  },
  filters: {
    formattedDate (value) {
      return value ? format(new Date(value), 'MM/dd/yyyy') : ''
    }
  }
}
</script>

<style lang="sass">
 .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>

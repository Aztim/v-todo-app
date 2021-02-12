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

              <v-list-item-action>
                <!-- <v-btn
                  @click.stop="dialogs.delete = true"
                  icon
                >
                  <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn> -->
                <TaskMenu
                  :task="task"
                />
              </v-list-item-action>
            </template>

          </v-list-item>
          <v-divider></v-divider>

          <!-- <DialogDelete
            v-if="dialogs.delete"
            @close="dialogs.delete = false"
            @delete="deleteTask(task.id)"
          /> -->
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
      tasks: 'tasksAll'
    })
  },
  methods: {
    doneTask (id) {
      const task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
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

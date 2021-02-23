<template>
  <div>
    <v-container class="my-10">
      <v-list
        v-if="tasks.length"
        class="pt-0"
        flat
      >
        <draggable
          v-model="tasks"
        >
          <div
            v-for="task in tasks"
            :key="task.id"
            :task="task"
          >
            <v-list-item
              @click="doneTask(task.id)"
              :class="{ 'blue lighten-5' : task.done }"
              class="white"
              :ripple="false"
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

                <DragButton
                  v-if="sort"
                />
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </draggable>
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

    <ButtonDoneSort
      v-if="sort"
    />
  </div>
</template>

<script>
import TaskMenu from '@/components/Todo/TaskMenu'
import ButtonDoneSort from '@/components/Todo/ButtonDoneSorting'
import DragButton from '@/components/Todo/DraggableButton'
import draggable from 'vuedraggable'
import { format } from 'date-fns'

export default {
  name: 'Todo',
  components: { TaskMenu, ButtonDoneSort, draggable, DragButton },
  data () {
    return {
      // newTaskTitle: '',
      // items: ['all', 'complete', 'ongoing', 'overdue'],
      // filter: null
    }
  },
  computed: {
    tasks: {
      get () {
        return this.$store.getters.tasksFiltered
      },
      set (value) {
        this.$store.dispatch('setTasks', value)
      }
    },
    sort () {
      return this.$store.getters.sorting
    }
  },
  mounted () {
    this.$store.dispatch('getTasks')
  },
  methods: {
    doneTask (id) {
      this.$store.dispatch('doneTask', id)
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
  .sortable-ghost
     opacity: 0
  .sortable-drag
    box-shadow: 0 0 10px rgba(0,0,0,0.3)

 .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>

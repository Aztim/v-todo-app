<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on" >
          New Task
        </v-btn>
      </template>

      <v-card>
        <v-card-title >
          Add a New Task
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules">
            </v-text-field>

            <v-menu max-width="290px">
              <v-date-picker v-model="due"></v-date-picker>
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="formattedDate()"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                  class="mb-4">
                </v-text-field>
              </template>
            </v-menu>

            <v-btn
              class="mr-4"
              color="blue lighten-2"
              dark @click="addTask"
              :loading="loading"
            >
              Add task
            </v-btn>

            <v-btn
              color="deep-orange darken-1"
              @click="clear"
              dark=""
            >
              clear
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { parseISO, format } from 'date-fns'

export default {
  data () {
    return {
      title: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      dialog: false,
      loading: false
    }
  },
  methods: {
    addTask () {
      if (this.$refs.form.validate()) {
        // this.loading = true

        const newTaskTitle = {
          title: this.title,
          dueDate: this.due,
          status: 'ongoing',
          id: Date.now(),
          done: false
        }
        this.$store.dispatch('addTask', newTaskTitle)
        this.dialog = false
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    formattedDate () {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
    }
  }
}
</script>

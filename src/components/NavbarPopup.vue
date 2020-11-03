<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on" >
          Click Me
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

            <v-textarea
              label="Description"
              v-model="description"
              prepend-icon="mdi-pencil"
              :rules="inputRules">
            </v-textarea>

            <v-menu max-width="290px">
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
                <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-btn
              class="mr-4"
              color="blue lighten-2"
              dark @click="submit"
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
import db from '@/fb'

export default {
  data () {
    return {
      title: '',
      description: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      dialog: false,
      loading: false
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        const project = {
          title: this.title,
          description: this.description,
          due: this.due,
          status: 'ongoing'
          // id: Date.now()
        }
        db.collection('task').add(project).then(() => {
          this.dialog = false
          this.$emit('projectAdded')
          this.loading = false
        })
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

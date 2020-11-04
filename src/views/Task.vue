<template>
  <div>
  <v-row justify="center" class="my-16">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="task.title"
              prepend-icon="mdi-folder"
              :rules="inputRules">
            </v-text-field>

            <v-textarea
              label="Description"
              v-model="task.description"
              prepend-icon="mdi-pencil"
              :rules="inputRules">
            </v-textarea>

            <v-menu max-width="290px">
                <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="task.due"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                  class="mb-4">
                </v-text-field>
              </template>
                <v-date-picker
                v-model="due" @change="changeDue"></v-date-picker>
            </v-menu>
                <!-- :value="formattedDate()" -->
            <v-card-actions>
          <v-btn text @click="completeTask">
            COMPLETE
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="#31437b"
            text
            @click="updateTask"
          >
            UPDATE
          </v-btn>
        </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import { parseISO, format } from 'date-fns'
export default {
  data () {
    return {
      task: [],
      title: '',
      description: '',
      due: null
    }
  },
  computed: {
  },
  methods: {
    formattedDate (d) {
      return d ? format(parseISO(d), 'do MMM yyyy') : ''
    },
    changeDue () {
      this.task.due = this.formattedDate(this.due)
    },
    updateTask () {
      this.$store.dispatch('UPDATE_TASK', this.task.id)
    }
    // completeTask () {
    //   this.task.status = 'complete'
    //   this.$store.dispatch('COMPLETE_TASK', this.task.id)
    //   this.$router.push('/')
    // }
  },
  created () {
    this.task = this.$store.getters.tasks.filter(item => item.id === this.$route.params.id)[0]
  }
}
</script>

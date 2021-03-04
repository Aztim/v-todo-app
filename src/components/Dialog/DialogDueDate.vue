<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker
      v-model="date"
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        @click="$emit('close')"
        text
        color="primary"
      >
        Cancel
      </v-btn>
      <v-btn
        @click="saveTask"
        text
        color="primary"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      date: null
    }
  },
  methods: {
    saveTask () {
      const payload = {
        id: this.task.id,
        dueDate: this.date,
        status: this.checkStatus(this.task.status)
      }
      this.$store.dispatch('updateTaskDueDate', payload)
      this.$emit('close')
    },
    checkStatus (status) {
      if (status === 'completed') {
        return status
      } else {
        return new Date(this.date) < new Date() ? 'overdue' : 'ongoing'
      }
    }
  },
  mounted () {
    if (this.task.dueDate) {
      this.date = this.task.dueDate
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
  <v-row justify="center" class="my-16">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card v-if="task">
        <v-card-text>
          <v-text-field
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            label="Title"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            v-model="description"
            :rules="[
              () => !!description || 'This field is required',
              () => !!description && description.length <= 25 || 'Address must be less than 25 characters',
            ]"
            label="Description"
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>
          <!-- <v-menu max-width="290px">
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
          </v-menu> -->
        </v-card-text>

        <v-card-actions>
          <v-btn text>
            COMPLETE
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="#31437b"
            text
            @click="submit"
          >
            UPDATE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: []
    }
  },
  computed: {
  },
  created () {
    this.task = this.$store.getters.tasks.filter(item => item.id === this.$route.params.id)
  }
}
</script>

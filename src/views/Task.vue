<template>
  <div class="project">
    <h1 class="grey--text">Task</h1>

    <v-container class="my-5">
      <v-expansion-panels v-for="task in tasks" :key="task.id">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>{{ task.title }}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold"> due by {{ task.due }}</div>
                <div>{{ task.description }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: []
    }
  },
  // computed: {
  //   myProjects () {
  //     return this.tasks.filter(task => {
  //       return project.person === 'Tim'
  //     })
  //   }
  // },
  created () {
  }
}
</script>

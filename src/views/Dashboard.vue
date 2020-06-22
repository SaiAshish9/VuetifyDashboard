<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-flex class="align-items-center">
          <v-btn
            @click="sortBy('title')"
            small
            depressed
            flat
            color="grey lighten-4"
          >
            <v-icon left small>folder</v-icon>
          </v-btn>
          <span class="caption text-lowercase">By project name</span>

          <v-btn
            @click="sortBy('person')"
            small
            depressed
            flat
            color="grey lighten-4"
          >
            <v-icon left small>person</v-icon>
          </v-btn>
          <span class="caption text-lowercase">By person </span>
        </v-flex>
      </v-layout>

      <v-card v-for="project in projects" :key="project" flat class="py-2 px-5">
        <v-layout row wrap :class="`pa-3 project ${project.status} `">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Project title
            </div>
            <div>
              {{ project.title }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Person
            </div>
            <div>
              {{ project.person }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Due by
            </div>
            <div>
              {{ project.due }}
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "sai",
          due: "1st Aug,2020",
          status: "ongoing",
        },
        {
          title: "lorem ipsum dolor sit am",
          person: "sai9",
          due: "1st Aug,2020",
          status: "overdue",
        },
        {
          title: "lorem ",
          person: "sai7",
          due: "1st Aug,2020",
          status: "complete",
        },
        {
          title: "lorem ipsum",
          person: "sai1",
          due: "1st Aug,2020",
          status: "ongoing",
        },
      ],
    };
  },
  methods:{
    sortBy(prop){
   this.projects.sort((a,b)=>a[prop]<b[prop]?-1:1)
}
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>

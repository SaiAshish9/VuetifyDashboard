<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-flex class="align-items-center">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="sortBy('title')"
                small
                depressed
                v-bind="attrs"
                v-on="on"
                color="background lighten-4 mx-2"
              >
                <v-icon left small>folder</v-icon>
              </v-btn>
            </template>

            <span small class="caption">Sort projects by Project Name</span>
          </v-tooltip>
          <span class="caption text-lowercase">By project name</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="sortBy('person')"
                small
                depressed
                v-bind="attrs"
                v-on="on"
                color="background lighten-4 mx-2"
              >
                <v-icon left small>person</v-icon>
              </v-btn>
            </template>
            <span small class="caption">Sort projects by Person Name</span>
          </v-tooltip>
          <span class="caption text-lowercase">By person </span>
        </v-flex>
      </v-layout>

      <v-card v-for="project in projects" :key="project.id" flat class="py-2 px-5">
        <v-layout row wrap :class="`pa-3 project_${project.status} `">
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
          <v-flex xs3 sm4 md2>
            <div class="right">
              <v-chip
                small
                :color="`${project.status}`"
                class=" white--text caption my-2 px-2 "
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
import db from '@/fb'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      projects: [
        {
          id:"1",
          title: "Design a new website",
          person: "sai",
          due: "1st Aug,2020",
          status: "ongoing",
        },
        {
          id:"2",
          title: "lorem ipsum dolor sit am",
          person: "sai9",
          due: "1st Aug,2020",
          status: "overdue",
        },
        { id:"3",
          title: "lorem ",
          person: "sai7",
          due: "1st Aug,2020",
          status: "complete",
        },
        {
          id:"4",
          title: "lorem ipsum",
          person: "sai1",
          due: "1st Aug,2020",
          status: "ongoing",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created(){
     db.collection('projects').onSnapshot(res=>{
       const changes=res.docChanges()
       
       changes.forEach(change=>{
         if(change.type === 'added' ){
           this.projects.push({
             ...change.doc.data(),
             id:change.doc.id
           })            
         }
       })
     })
  }
};
</script>

<style scoped>
.project_complete {
  border-left: 4px solid #3cd1c2;
}
.project_ongoing {
  border-left: 4px solid orange;
}
.project_overdue {
  border-left: 4px solid tomato;
}

</style>

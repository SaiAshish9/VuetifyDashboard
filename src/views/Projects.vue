<template>
  <div class="projects">
    <h1 class="subheading grey--text">
      Projects
    </h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">
                due by {{project.due}}
              </div>
              <div>
              {{ project.content }}
              </div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          title: "Design a new website",
          person: "sai",
          due: "1st Aug,2020",
          status: "ongoing",
        },
        {
          title: "lorem ipsum dolor sit amet",
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
  computed:{
    myProjects(){
      return this.projects.filter(project =>{
        return project.person==='Sai'
      })
    }
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

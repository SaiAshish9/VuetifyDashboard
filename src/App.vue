<template>
  <v-app 
  id="app"
  :style="{background:$vuetify.theme.themes[cl].background}"
  >
    <Navbar/>
    <!-- grey lighten-4 -->
    <v-content class="background ml-4 my-2" >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    
  }),
  computed:{
    cl(){
      return this.$vuetify.theme.dark?'dark':'light'
      }
  }
};
</script>

<style >
#app{
background-color:var(--v-background-base) 
}
</style>
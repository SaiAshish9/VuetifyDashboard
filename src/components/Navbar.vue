<template>
  <div>
    <v-app-bar flat app class="grey lighten-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class=" grey--text">
        <span class=" font-weight-light">Vuetify </span>
        <span>Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="grey grey--text lighten-4 text-capitalize">
        <span>
          Sign Out
        </span>
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-item
        router :to="link.route"
         v-for="link in links" :key="link.text">
            <v-list-item-icon>
                <v-icon class="white--text">
                  {{ link.icon }}
                </v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links:[
      {icon:'dashboard',text:'Dashboard',route:'/'},
      {icon:'folder',text:'My Projects',route:'/projects'},
      {icon:'person',text:'Team',route:'/team'},
]
    }
    ;
  },

};
</script>

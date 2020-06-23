<template>
  <div>
    <!-- class="grey lighten-4" -->
    <v-app-bar  app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class=" grey--text">
        <span class=" font-weight-light">Vuetify </span>
        <span class="hidden-sm-and-down">Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="background lighten-4 grey--text"
            dark
            depressed
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              expand_more
            </v-icon>
            <span>
              Menu
            </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn depressed class="background mx-2 grey--text lighten-4 text-capitalize">
        <span>
          Sign Out
        </span>
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              src=" https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg"
              alt="x"
            />
          </v-avatar>
          <p class="white--text subheading  text-center my-10">
            Sai
          </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          router
          :to="link.route"
          v-for="link in links"
          :key="link.text"
        >
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
      <v-layout column align-center>
        <v-switch
          color="complete"
          depressed
          hide-details
          class="text-center"
          v-model="$vuetify.theme.dark"
        >
        </v-switch>
        <p class="white--text subheading  text-center my-1">
          {{ $vuetify.theme.dark ? "light" : "dark" }} theme
        </p>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from "./Popup";
export default {
  data() {
    return {
      drawer: this.$vuetify.breakpoint.smAndDown ? false : true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
  components: {
    Popup,
  },
};
</script>

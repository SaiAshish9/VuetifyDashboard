<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <!-- fluid -->
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <!-- text-sm-center -->
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-4">
                <img :src="person.avatar" 
                alt="img" />
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat depressed color="background" class=" lighten-4">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      team: [
        {
          name: "Sai",
          role: "web developer",
          avatar:
            "https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg",
        },
        {
          name: "Sai7",
          role: "web developer",
          avatar:
            "https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg",
        },
        {
          name: "Sai3",
          role: "web developer",
          avatar:
            "https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg",
        },
        {
          name: "Sai4",
          role: "web developer",
          avatar:
            "https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg",
        },
        {
          name: "Sai9",
          role: "web developer",
          avatar:
            "https://image.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg",
        },
      ],
    };
  },
  components: {},
};
</script>

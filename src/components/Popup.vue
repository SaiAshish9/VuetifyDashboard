<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        v-bind="attrs"
        v-on="on"
        class="background lighten-4 grey--text"
      >
        Add new project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>
          Add a new project
        </h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            :rules="inputRules"
            prepend-icon="folder"
            label="Title"
            v-model="title"
          >
          </v-text-field>
          <v-textarea
            :rules="inputRules"
            prepend-icon="edit"
            label="information"
            v-model="content"
          >
          </v-textarea>

          <v-row>
            <v-col cols="6">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Due Date"
                    :rules="inputRules"
                    prepend-icon="date_range"
                    v-bind="attrs"
                    v-on="on"
                    :value="formattedDate"
                  >
                  </v-text-field>
                </template>
                <v-date-picker v-model="due"> </v-date-picker>
              </v-menu>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-layout align-items-center row justify-content-center>
                <v-flex>
                  <v-btn @click="submit" depressed class="primary  mx-0 mt-3">
                    Add project
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        (v) => v.length >= 3 || "Minimum  3 characters are required",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(new Date(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>

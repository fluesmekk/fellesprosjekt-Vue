<template>
  <div>
    <v-container style="height: 100vh" class="">
      <v-col>
        <v-row sm="12" cols="12" justify="center" class="my-3 fill-height">
          <v-card outline class="pa-3 px-5">
            <h1 class="text-center">{{ settings.nameOfPot }}</h1>
          </v-card>
        </v-row>
        <v-row justify="center" class="my-5">
          <v-card class="pa-3">
            <h1>Pott :{{ settings.potAmount }}</h1>
          </v-card>
        </v-row>
        <v-row justify="center my-15">
          <h2>
            Dager igjen
            <v-card
              ><h1 class="text-center">{{ settings.daysRemaining }}</h1></v-card
            >
          </h2>
        </v-row>
        <v-row justify="center" class="my-5 my-16">
          <v-col cols="8" sm="9" md="9">
            <v-btn width="100%" @click="routeToMenu">{{ checkForItem }}</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn>Legg til</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeScreen",
  created() {
    console.log(this.settings);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["settings"]),
    checkForItem() {
      if (!this.settings.selectedItem) return "Meny";
      else return this.settings.selectedItem.name;
    },
  },
  methods: {
    routeToMenu() {
      this.$router.push("/item");
    },
  },
};
</script>

<style lang="css" scoped></style>

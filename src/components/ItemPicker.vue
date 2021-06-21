<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="item in items" :key="item.name">
        <div>
          <v-expansion-panel-header>
            <v-list-item>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="red--text">
                  {{ item.price }},-
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn>Legg til</v-btn>
          </v-expansion-panel-content>
          <v-divider></v-divider>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "ItemPicker",
  data() {
    return {
      items: [
        {
          name: "Brus",
          price: 500,
          icon: "liquor",
        },
        {
          name: "Øl",
          price: 500,
          icon: "liquor",
        },
        {
          name: "Godteri",
          price: 500,
          icon: "icecream",
        },
        {
          name: "Snacks",
          price: 500,
          icon: "cake",
        },
        {
          name: "Kake",
          price: 500,
          icon: "cake",
        },
        {
          name: "Junkfood",
          icon: "takeout_dining",
          price: 500,
        },
        {
          name: "Høytid",
          icon: "dinner_dining",
          price: 100,
        },
        {
          name: "Fest",
          icon: "local_bar",
          price: 1000,
        },
        {
          name: "Pizza",
          icon: "local_pizza",
          price: 500,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

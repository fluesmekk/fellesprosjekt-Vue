import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Her er potten tenkt som at den startet på 20000
//Og det er lagt til 2 items med verdi 500 per.

export default new Vuex.Store({
  state: {
    settings: {
    nameOfPot: 'Las Vegas',
    potAmount: 19000,
    daysRemaining: '43',
    itemsAdded: [
      {
        name: "Brus",
        price: 500,
        icon: "liquor",
      },
      {
        name: "Brus",
        price: 500,
        icon: "liquor",
      },
    ],
    selectedItem: undefined,
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

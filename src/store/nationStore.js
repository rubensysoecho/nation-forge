import { defineStore } from 'pinia';

export const useNationStore = defineStore('nation', {
  state: () => ({
    nationData: null,
  }),

  actions: {
    setNationData(data) {
      this.nationData = data;
    },
    clearNation() {
      this.nationData = null;
    }
  },

  getters: {
    hasNation: (state) => !!state.nationData,
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'nationData',
        storage: localStorage,
      }
    ]
  }
});
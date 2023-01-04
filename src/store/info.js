import { defineStore } from 'pinia';
import { infoTemplate } from '~/config/characters';

export const useStore = defineStore({
  id: 'ggd',
  state() {
    return {
      list: [],
      maxStatus: true,
      savedPosition: [86, 127],
      savedSize: [1579, 789],
    };
  },
  getters: {
    getMaxStatus() {
      return this.maxStatus;
    },
    getList() {
      return this.list;
    },
    getSavedPosition() {
      return this.savedPosition;
    },
    getSavedSize() {
      return this.savedSize;
    },
  },
  actions: {
    setMaxStatus(val) {
      this.maxStatus = val;
    },
    setSavedPosition(val) {
      this.savedPosition = val;
    },
    setSavedSize(val) {
      this.savedSize = val;
    },
    initList(number = 5) {
      this.list = new Array(number).fill(0).map(
        (_, i) =>
          this.list[i] || {
            id: i + 1,
            ...infoTemplate,
          },
      );
    },
    getInfoById(id) {
      return this.list.find((item) => item.id === id);
    },
    setList(val) {
      this.list = val;
    },
    setInfoById(id, val) {
      const index = this.list.findIndex((item) => item.id === id);
      if (index === -1) return;
      this.list[index] = val;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});

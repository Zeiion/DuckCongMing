import { defineStore } from 'pinia';
import { getInfoTemplate } from '~/config/characters';

export const useStore = defineStore({
  id: 'ggd',
  state() {
    return {
      list: [],
      maxStatus: true,
      savedPosition: [95, 126],
      savedSize: [1596, 799],
      brightness: 50,
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
    getBrightness() {
      return this.brightness;
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
    // 0-1 or 0-100
    setBrightness(val) {
      this.brightness = val < 1 ? (val * 100).toFixed(0) : val;
    },
    initList(number = 5) {
      this.list = new Array(number).fill(0).map(
        (_, i) =>
          this.list[i] || {
            id: i + 1,
            ...getInfoTemplate(),
          },
      );
    },
    clearList() {
      this.list = [];
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

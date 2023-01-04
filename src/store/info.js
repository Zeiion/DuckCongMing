import { defineStore } from 'pinia';
import { infoTemplate } from '~/config/characters';

export const useStore = defineStore({
  id: 'ggd',
  state() {
    return {
      list: [],
      maxStatus: true,
    };
  },
  getters: {
    getMaxStatus() {
      return this.maxStatus;
    },
    getList() {
      return this.list;
    },
  },
  actions: {
    setMaxStatus(val) {
      this.maxStatus = val;
    },
    initList(number = 5) {
      this.list = new Array(number).fill(0).map(
        (_, i) =>
          this.list[i] || {
            id: i + 1,
            ...infoTemplate,
          },
      );
      console.log('init', this.list);
    },
    getInfoById(id) {
      return this.list.find((item) => item.id === id);
    },
    setList(val) {
      this.list = val;
    },
    setInfoById(id, val) {
      const index = this.list.findIndex((item) => item.id === id);
      console.log('🚀 ~ setInfoById ~ index', index, this.list, id);
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

import { defineStore } from 'pinia';
import { infoTemplate } from '~/config/characters';

export const useStore = defineStore({
  id: 'ggd',
  state() {
    return {
      list: [],
    };
  },
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    initList(number = 5) {
      this.list = Array.from(
        { length: number },
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

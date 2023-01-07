import { defineStore } from 'pinia';
import { getInfoTemplate } from '~/config/characters';

export const useStore = defineStore({
  id: 'ggd',
  state() {
    return {
      list: [],
      maxStatus: true,
      styleConfig: {
        savedPosition: [95, 126],
        savedSize: [1596, 799],
        brightness: 50,
        boxScale: 1,
        // 卡片间距
        rowGap: '2.6vh',
        columnGap: '2.6vw',
      },
      shortCutKey: '`',
    };
  },
  getters: {
    getMaxStatus() {
      return this.maxStatus;
    },
    getList() {
      return this.list;
    },
    getShortCutKey() {
      return this.shortCutKey;
    },
    getSavedPosition() {
      return this.styleConfig.savedPosition;
    },
    getSavedSize() {
      return this.styleConfig.savedSize;
    },
    getBrightness() {
      return this.styleConfig.brightness;
    },
    getBoxScale() {
      return this.styleConfig.boxScale;
    },
    getRowGap() {
      return this.styleConfig.rowGap;
    },
    getColGap() {
      return this.styleConfig.columnGap;
    },
  },
  actions: {
    setMaxStatus(val) {
      this.maxStatus = val;
    },
    setSavedPosition(val) {
      this.styleConfig.savedPosition = val;
    },
    setSavedSize(val) {
      this.styleConfig.savedSize = val;
    },
    // 0-1 or 0-100
    setBrightness(val) {
      this.styleConfig.brightness = val < 1 ? (val * 100).toFixed(0) : val;
    },
    setBoxScale(val) {
      this.styleConfig.boxScale = val;
    },
    setRowGap(val) {
      if (typeof val === 'number') {
        this.styleConfig.rowGap = `${val}vh`;
      } else this.styleConfig.rowGap = val;
    },
    setColGap(val) {
      if (typeof val === 'number') {
        this.styleConfig.columnGap = `${val}vw`;
      } else this.styleConfig.columnGap = val;
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

<template>
  <div class="main">
    <div class="tool">
      <div class="tool-left" v-if="isMax">
        <Logo />
        <Info />
      </div>
      <div class="tool-right">
        <Save v-if="isMax" />
        <Refresh @clear="clear" v-if="isMax" />
        <div class="player-counter" v-if="isMax">
          <span>人数：</span>
          <n-input-number
            size="small"
            v-model:value="playerCount"
            :min="5"
            :max="16"
            @update:value="hanldePlayerCountChange"
          ></n-input-number>
        </div>
        <Timer />
        <Pin />
        <Scale />
        <Handler />
      </div>
    </div>
    <ConfigBoxList :list="list" v-if="isMax" />
  </div>
</template>
<script setup>
import {
  appWindow,
  PhysicalPosition,
  PhysicalSize,
} from '@tauri-apps/api/window';
import { useStore } from '~/store/info';
const playerCount = $ref(5);
const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const brightness = $computed(() => store.getBrightness / 100);
const hanldePlayerCountChange = (count) => {
  store.initList(count);
};
const list = $computed(() =>
  new Array(playerCount).fill(0).map((_, i) => i + 1),
);

const clear = () => {
  store.clearList();
  hanldePlayerCountChange(playerCount);
};

const restoreWindow = () => {
  const savedSize = store.getSavedSize;
  if (savedSize && isMax) {
    appWindow.setSize(new PhysicalSize(savedSize[0], savedSize[1]));
  }
  const savedPosition = store.getSavedPosition;
  if (savedPosition && isMax) {
    appWindow.setPosition(
      new PhysicalPosition(savedPosition[0], savedPosition[1]),
    );
  }
  // console.log('🚀', savedSize, savedPosition);
};
onMounted(() => {
  hanldePlayerCountChange(playerCount);
  restoreWindow();
});
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1vh 1vw;
  box-sizing: border-box;
  /* border-radius: 2%; */
  border: 5px dashed rgba(255, 255, 255, 0.4);
  color: white;
  user-select: none;
}
.player-counter {
  display: flex;
  align-items: center;
  opacity: v-bind(brightness);
}
.tool {
  display: flex;
  justify-content: space-between;
  gap: 1vw;
  height: 50px;
  align-items: center;
}
.tool-left,
.tool-right {
  display: flex;
  gap: 1vw;
  align-items: center;
  width: 100%;
}
.tool-left {
  justify-content: flex-start;
}
.tool-right {
  justify-content: flex-end;
}
</style>

<template>
  <div class="main">
    <div class="tool" data-tauri-drag-region>
      <div class="tool-left" v-if="isMax" data-tauri-drag-region>
        <Logo />
        <Info />
      </div>
      <div class="tool-right" data-tauri-drag-region>
        <Scale v-if="isMax" />
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
        <div @click="add"></div>
        <Timer />
        <Pin />
        <Zoom />
        <Handler />
      </div>
    </div>
    <ConfigBoxList :list="list" v-if="isMax" />
  </div>
</template>
<script setup>
import { useStore } from '~/store/info';
import { useScale } from '~/hook/scale';
const { isMax, restoreWindow, addZoomShortCutListener } = useScale();
const playerCount = $ref(5);
const store = useStore();
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

onMounted(() => {
  restoreWindow();
  hanldePlayerCountChange(playerCount);
  addZoomShortCutListener();
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

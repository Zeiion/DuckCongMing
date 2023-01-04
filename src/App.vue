<template>
  <div class="main">
    <div class="tool">
      <div class="player-counter" v-if="isMax">
        人数：<n-input-number
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
    <ConfigBoxList :list="list" v-if="isMax" />
  </div>
</template>
<script setup>
import { useStore } from '~/store/info';
const playerCount = $ref(5);
const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const hanldePlayerCountChange = (count) => {
  store.initList(count);
};
const list = $computed(() =>
  new Array(playerCount).fill(0).map((_, i) => i + 1),
);
onMounted(() => {
  hanldePlayerCountChange(playerCount);
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
}
.player-counter {
  display: flex;
  align-items: center;
  opacity: 0.5;
}
.tool {
  display: flex;
  justify-content: flex-end;
  gap: 1vw;
  height: 50px;
  align-items: center;
}
</style>

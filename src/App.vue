<template>
  <div class="main">
    <div class="tool">
      <div class="player-counter">
        人数：<n-input-number
          v-model:value="playerCount"
          :min="5"
          :max="16"
          @change="hanldePlayerCountChange"
        ></n-input-number>
      </div>
      <Pin />
      <Handler />
    </div>
    <ConfigBoxList :list="list" />
  </div>
</template>
<script setup>
import { useStore } from '~/store/info';
const playerCount = $ref(5);
const store = useStore();
const hanldePlayerCountChange = (count) => {
  store.initList(count);
};
const list = $computed(() =>
  new Array(playerCount).fill(0).map((_, i) => i + 1),
);
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1%;
  box-sizing: border-box;
  border-radius: 2%;
  border: 5px dashed rgba(0, 0, 0, 0.4);
}
.player-counter {
  display: flex;
  align-items: center;
}
.tool {
  display: flex;
  justify-content: flex-end;
  gap: 1vw;
  height: 8vh;
  align-items: center;
}
</style>

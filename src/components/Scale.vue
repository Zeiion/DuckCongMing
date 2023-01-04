<template>
  <n-icon class="scale" size="30" @click="scale">
    <ArrowMinimize20Filled v-if="isMax" />
    <ArrowMaximize20Filled v-else />
  </n-icon>
</template>

<script setup>
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
import { useStore } from '~/store/info';
import { ArrowMaximize20Filled, ArrowMinimize20Filled } from '@vicons/fluent';

const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const savedSize = $ref(new LogicalSize(800, 1200));
const scale = async () => {
  if (!isMax) {
    // 全屏
    appWindow.setSize(savedSize);
  } else {
    // 最小化
    savedSize = await appWindow.innerSize();
    appWindow.setSize(new LogicalSize(200, 50));
  }
  store.setMaxStatus(!isMax);
};
</script>

<style scoped>
.scale {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

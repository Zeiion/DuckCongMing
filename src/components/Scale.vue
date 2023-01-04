<template>
  <n-icon class="scale" size="30" @click="scale">
    <ArrowMinimize20Filled v-if="isMax" />
    <ArrowMaximize20Filled v-else />
  </n-icon>
</template>

<script setup>
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
import { useStore } from '~/store/info';
import { ArrowMaximize20Filled, ArrowMinimize20Filled } from '@vicons/fluent';

const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const savedSize = $ref(store.getSavedSize);
const scale = async () => {
  if (!isMax) {
    // 全屏
    appWindow.setSize(new PhysicalSize(savedSize[0], savedSize[1]));
  } else {
    // 最小化
    const innerSize = await appWindow.innerSize();
    savedSize = [innerSize.width, innerSize.height];
    appWindow.setSize(new PhysicalSize(200, 50));
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

<template>
  <n-icon class="pin" size="30" @click="pin">
    <Pin20Filled v-if="isPinned" />
    <Pin20Regular v-else />
  </n-icon>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';
import { Pin20Filled, Pin20Regular } from '@vicons/fluent';
import { useStore } from '~/store/info';
const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const isPinned = $ref(false);
const pin = async () => {
  Promise.all([
    // appWindow.setResizable(isPinned),
    appWindow.setAlwaysOnTop(!isPinned),
  ]).then(() => {
    isPinned = !isPinned;
  });
  if (isMax) {
    const outerPosition = await appWindow.outerPosition();
    const savedSize = await appWindow.innerSize();
    console.log('pin', outerPosition, savedSize);
    store.setSavedSize([savedSize.width, savedSize.height]);
    store.setSavedPosition([outerPosition.x, outerPosition.y]);
  }
};
</script>

<style scoped>
.pin {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

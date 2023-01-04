<template>
  <n-icon class="pin" size="30" @click="pin">
    <Pin20Filled v-if="isPinned" />
    <Pin20Regular v-else />
  </n-icon>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';
import { Pin20Filled, Pin20Regular } from '@vicons/fluent';
const isPinned = $ref(false);
const pin = () => {
  Promise.all([
    appWindow.setResizable(isPinned),
    appWindow.setAlwaysOnTop(!isPinned),
  ]).then(() => {
    isPinned = !isPinned;
  });
};
</script>

<style scoped>
.pin {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

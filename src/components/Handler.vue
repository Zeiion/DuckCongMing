<template>
  <n-icon size="30">
    <Dismiss20Filled class="handler" @click="close" />
  </n-icon>
</template>

<script setup>
import { Dismiss20Filled } from '@vicons/fluent';
import { appWindow } from '@tauri-apps/api/window';
const close = () => {
  appWindow.close();
};
</script>

<style scoped>
.handler {
  width: 30px;
  height: 30px;
}
</style>

<template>
  <n-icon class="handler" size="30">
    <ArrowMove20Filled data-tauri-drag-region />
  </n-icon>
</template>

<script setup>
import { ArrowMove20Filled } from '@vicons/fluent';
</script>

<style scoped>
.handler {
  width: 30px;
  height: 30px;
}
[data-tauri-drag-region] {
  cursor: move; /* Not all browsers support "grab" */
  cursor: grab;
  cursor: -webkit-grab;
}

[data-tauri-drag-region]:active {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}
</style>

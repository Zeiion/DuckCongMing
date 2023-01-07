<template>
  <n-icon class="refresh" size="30" @click="clear">
    <Eraser20Regular />
  </n-icon>
</template>

<script setup>
import { Eraser20Regular } from '@vicons/fluent';
const emits = defineEmits(['clear']);
const clear = () => {
  emits('clear');
};
</script>

<style scoped>
.refresh {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

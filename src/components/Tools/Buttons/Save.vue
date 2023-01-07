<template>
  <n-icon class="save" size="30" @click="saveWindow">
    <Save20Regular />
  </n-icon>
</template>

<script setup>
import { Save20Regular } from '@vicons/fluent';
import { useScale } from '~/hook/scale';
const { saveWindow } = useScale();
</script>

<style scoped>
.save {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

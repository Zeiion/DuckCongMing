<template>
  <div class="list">
    <ConfigBox v-for="id in list" :id="id" :key="id" />
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vh;
}
</style>

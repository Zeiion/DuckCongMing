<template>
  <div class="timer" @click="handleClick" @dblclick="handleDoubleClick">
    {{ showTime }}
  </div>
</template>

<script setup>
const time = $ref(0); // s
const timer = $ref(null);
const showTime = $computed(() => {
  const minute = ('00' + Math.floor(time / 60)).slice(-2);
  const second = ('00' + (time % 60)).slice(-2);
  return `${minute}:${second}`;
});
// start timer or stop timer
const handleClick = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(() => {
      time++;
    }, 1000);
  }
};
// clear time and stop timer
const handleDoubleClick = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  time = 0;
};
</script>

<style scoped>
.timer {
  cursor: pointer;
  width: 100px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(40, 40, 40, 0.8);
}
</style>

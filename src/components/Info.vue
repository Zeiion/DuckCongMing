<template>
  <n-icon class="info" size="30" @click="showInfo">
    <Info20Filled />
  </n-icon>
  <n-modal v-model:show="showModal">
    <n-card
      class="info-modal"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <div class="desc">
        <n-icon color="#f4ba47" size="30">
          <Warning12Filled />
        </n-icon>
        <span>
          “大聪明”虽然是半透明的，但是会遮挡鼠标操作，可以
          <span class="highlight">双击</span>
          角色方框左下（人物插画）部分或小化窗口进行
          <span class="highlight">投票</span>
        </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <ArrowMove20Filled />
        </n-icon>
        <span> 拖动此按钮来移动窗口 </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <ArrowMaximize20Filled />
        </n-icon>
        <span> 点击窗口放大，进入会议模式 </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <ArrowMinimize20Filled />
        </n-icon>
        <span>
          点击窗口缩小，进入游戏模式，
          <span class="highlight">刺客鸭</span> 狙击时建议暂时缩小窗口
        </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <Pin20Regular />
        </n-icon>
        <span> 点击此按钮以固定窗口 </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <Pin20Filled />
        </n-icon>
        <span> 点击此按钮以取消固定窗口，该状态下窗口始终置顶 </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <Eraser20Regular />
        </n-icon>
        <span> 点击此按钮以清空所有数据 </span>
      </div>
      <div class="desc">
        <span style="font-style: italic; font-size: 0.5em">00:00</span>
        <span> 点击开始计时，再次点击清空计时 </span>
      </div>
      <template #footer>
        <div class="footer">
          一时兴起而为之，欢迎提出bug和建议
          <br />
          \(Ze╹◡╹o)N
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import {
  Info20Filled,
  Warning12Filled,
  Pin20Filled,
  Pin20Regular,
  ArrowMaximize20Filled,
  ArrowMinimize20Filled,
  ArrowMove20Filled,
  Eraser20Regular,
} from '@vicons/fluent';
const showModal = $ref(false);
const showInfo = () => {
  showModal = true;
};
</script>

<style scoped>
.info {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.info-modal {
  width: 80vw;
  padding: 2vh 2vw;
}
.desc {
  display: flex;
  gap: 1vw;
  align-items: center;
  margin-bottom: 3vh;
  font-size: large;
}
.highlight {
  color: #f00;
  font-weight: bold;
}
.footer {
  display: flex;
  justify-content: flex-end;
  text-align: end;
}
</style>

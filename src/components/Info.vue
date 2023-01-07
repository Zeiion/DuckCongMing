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
        <div class="bold">拖动窗口:</div>
        <span>
          鼠标放至窗口顶部（呈
          <n-icon color="#111" size="15">
            <HandLeft20Filled />
          </n-icon>
          ）拖动即可
        </span>
      </div>
      <div class="desc">
        <div class="bold">调整大小:</div>
        <span> 拉拽虚线框即可调整窗口大小</span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <ScaleFit20Regular />
        </n-icon>
        <span>
          点击此按钮弹出可以配置会议模式卡片间距的弹窗，依次可以配置：卡片大小、上下边距、左右边距
        </span>
      </div>
      <div class="desc">
        <n-icon color="#111" size="30">
          <Save20Regular />
        </n-icon>
        <span>
          点击此按钮以保存窗口大小、位置信息；调整好适配屏幕的窗口大小后保存，下次启动时将自动恢复保存配置
        </span>
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
        <div style="font-style: italic; font-size: 0.5em">00:00</div>
        <span> 点击开始计时，再次点击清空计时 </span>
      </div>
      <template #footer>
        <div class="footer">
          <div>
            <Brightness />
          </div>
          <div>
            一时兴起而为之，欢迎
            <span
              style="cursor: pointer; text-decoration: underline"
              @click="openLib"
              >提出bug和建议</span
            >
            <br />
            \(Ze╹◡╹o)N
          </div>
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
  Eraser20Regular,
  Save20Regular,
  ScaleFit20Regular,
  HandLeft20Filled,
} from '@vicons/fluent';
import { open } from '@tauri-apps/api/shell';

const showModal = $ref(false);
const showInfo = () => {
  showModal = true;
};
const openLib = () => open('https://github.com/Zeiion/DuckCongMing');
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
  background-color: rgba(255, 255, 255, 0.92);
}
.desc {
  display: flex;
  align-items: center;
  margin-bottom: 2.8vh;
  font-size: large;
}
.desc > span {
  margin-left: 1vw;
}
.highlight {
  color: #f00;
  font-weight: bold;
}
.bold {
  font-weight: bold;
}
.footer {
  display: flex;
  justify-content: space-between;
  text-align: end;
}
</style>

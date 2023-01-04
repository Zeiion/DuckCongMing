<template>
  <div class="box">
    <div class="vertical-list">
      <n-input
        v-model:value="info.remark"
        placeholder="备注"
        type="textarea"
      ></n-input>
      <div>
        <n-checkbox v-model:check="info.status[0]">好鹅</n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[0]"
          :options="characters"
          multiple
          clearable
          placeholder="选择好鸭身份"
        ></n-select>
      </div>
      <div>
        <n-checkbox v-model:check="info.status[1]">坏鸭</n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[1]"
          :options="characters"
          multiple
          clearable
          placeholder="选择坏鹅身份"
        ></n-select>
      </div>
      <div>
        <n-checkbox v-model:check="info.status[2]">中立</n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[2]"
          :options="characters"
          multiple
          clearable
          placeholder="选择中立身份"
        ></n-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { characters, infoTemplate } from '~/config/characters';
import { useStore } from '~/store/info';
const store = useStore();
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const info = $computed({
  get: () => store.getInfoById(props.id) || infoTemplate,
  set: (val) => {
    store.setInfoById(props.id, val);
  },
});
</script>

<style scoped>
.box {
  display: flex;
  justify-content: flex-end;
  width: 24vw;
  height: 20vh;
  padding: 1%;
  box-sizing: border-box;
}
.vertical-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5vh;
  width: 70%;
}
.vertical-list > div {
  display: flex;
  align-items: center;
}
.n-checkbox {
  width: 40%;
}
:deep(.n-input) .n-input-wrapper {
  max-height: 6vh;
}
</style>

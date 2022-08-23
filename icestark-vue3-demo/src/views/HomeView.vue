<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <SubTable />
    <el-button round>Round</el-button>
    <el-button type="primary" round @click="change1"
      >父传子:{{ state.numSon }}</el-button
    >
    <el-button type="success" round>{{ num }}</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
    <SonComponents txt2="txt2" :txt="state.numSon" @updateNameF="change1" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import SubTable from "../components/SubTable.vue";
import SonComponents from "../components/SonComponents.vue";

const num = ref(1); //定义一个响应式的基础类型
const state = reactive({
  numSon: 1,
}); //定义对象
onMounted(() => {
  console.log(num.value); //输出num的值
});
const change1 = () => {
  state.numSon += state.numSon;
  num.value += num.value;
};
</script>

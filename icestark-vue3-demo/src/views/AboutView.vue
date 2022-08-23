<template>
  <div class="about">
    <h1>This is an about page - {{num}}</h1>
  </div>
</template>


<script lang="ts" setup>
import { store } from '@ice/stark-data';
import { ref } from "vue";

// 监听语言变化
store.on('language', (lang) => {
  console.log(`current language is ${lang}`);
}, true);

// 获取当前用户
const userInfo = store.get('user');
const num = ref(userInfo); //定义一个响应式的基础类型
 
</script> 

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const innerJump = () => {
  router.push('/about')
};

const outerJump = () => {
  router.push('/seller')
}

</script>

<template>
  <div class="home">
    Home page

    <p><el-link type="primary" @click="innerJump">About</el-link></p>
    <p><el-link type="primary" @click="outerJump">Seller</el-link></p>
  </div>
</template>

<script lang="ts">
import { store } from '@ice/stark-data';
const userInfo = { name: 'Tom', age: 11 };
store.set('language', 'CH'); // 设置语言
store.set('user', userInfo); // 设置登录后当前用户信息
</script>
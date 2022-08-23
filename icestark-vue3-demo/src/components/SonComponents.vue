<template>
  <div class="SonComponents">
    <h1>{{ props.txt }}</h1>
    <el-button @click="age++">computed: {{ age }}</el-button>
    <el-button @click="changeName">子传父</el-button>
    <h3>{{ nextNum }}</h3>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, computed, ref } from "vue";
const props = defineProps({
  txt2: {
    type: String,
  },
  txt: {
    type: Number,
  },
});
// const name = ref("zzz");
const age = ref(25);

// watch([name, age], ([name, age], [prevName, prevAge]) => {
//   console.log("newName", name, "oldName", prevName);
//   console.log("newAge", age, "oldAge", prevAge);
// });
watch(
  age,
  (value) => {
    console.log("age变化了", value);
  },
  {
    // 深度监听，当ref的值是一个复杂数据类型，需要深度监听
    // 但是如果是以reactive创建的复杂类型数据，则不需要
    deep: true,
    immediate: true,
  }
);

const emit = defineEmits(["updateNameF"]);
const nextNum = computed(() => {
  return age.value + 1;
});

watch(
  nextNum,
  (value) => {
    console.log("nextNum变化了", value);
  },
  {
    // 深度监听，当ref的值是一个复杂数据类型，需要深度监听
    // 但是如果是以reactive创建的复杂类型数据，则不需要
    deep: true,
    immediate: true,
  }
);
const changeName = () => {
  emit("updateNameF", "Tom");
};
</script>

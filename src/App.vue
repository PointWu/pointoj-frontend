<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layout/BasicLayout.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// const router = useRouter();
// const store = useStore();

// router.beforeEach((to, from, next) => {
//   if (to.meta?.access === "canAdmin") {
//     if (store.state.user.loginUser?.role !== "admin") {
//       next("/noauth");
//       return;
//     }
//   }
//   next();
// });

const doInit = () => {
  console.log("hello point 👋");
};

// 全局初始化函数，有全局单次调用的代码，都可以写在这里
onMounted(() => {
  doInit();
});
</script>

<style></style>

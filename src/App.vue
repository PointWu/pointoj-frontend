<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layout/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
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

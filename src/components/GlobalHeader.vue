<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="@/assets/logo.png" />
            <div class="title">point OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">{{
          item.name
        }}</a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        <a-dropdown>
          <a-button>{{
            store.state.user?.loginUser?.userName ?? "未登录"
          }}</a-button>
          <template #content>
            <a-doption @click="outLogin">退出登录</a-doption>
          </template>
        </a-dropdown>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { routes } from "../router/routes";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

const router = useRouter();
const selectedKeys = ref(["/"]);

// 路由挑转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const store = useStore();

// NOTE 过滤掉隐藏路由,使用计算属性，保证用户信息发生变更的时候，触发菜单渲染。
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }

    return true;
  });
});

// 退出登录

const outLogin = () => {
  UserControllerService.userLogoutUsingPost();
  location.reload();
};

// 测试权限 3s后切为管理员
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "point管理员",
//     userRole: ACCESS_ENUM.ADMIN,
//   });
// }, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  color: #444;
  margin-left: 14px;
}

.logo {
  height: 48px;
}
</style>

import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
export default {
  namespaced: true,
  // state 存储的状态信息，比如用户信息
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: ACCESS_ENUM.NO_LOGIN, // 角色游客
    },
  }),
  //   getters,
  // actions （支持异步） 执行异步操作，并且触发mutations 的更改
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO 改为 从远程请求获取登录信息
      commit("updateUser", payload);
    },
  },
  // mutations （尽量同步）定义对变量进行增删改（更新）的方法
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;

import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
export default {
  namespaced: true,
  // state 存储的状态信息，比如用户信息
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  //   getters,
  // actions （支持异步） 执行异步操作，并且触发mutations 的更改
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 从远程请求获取登录信息
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NO_LOGIN,
        });
      }
    },
  },
  // mutations （尽量同步）定义对变量进行增删改（更新）的方法
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;

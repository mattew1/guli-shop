import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";
// import { resolve } from "core-js/fn/promise";

const state = {
  categoryList: [], //分类列表
  floorList: [], // 广告列表
  bannerList: [], // 楼层列表
};
//唯一数据源 设置状态

const getters = {
  banners(state) {
    return state.bannerList;
  },
};
// store 的计算属性  获取内容

//mutations 状态我唯一更改方式
// 都有一个事件名 和一个回调函数  handler
// 函数名大写是一个惯例
const mutations = {
  RECEIVE_CATEGORYLIST(state, payload) {
    state.categoryList = payload;
  },
  RECEIVE_BANNERLIST(state, payload) {
    state.bannerList = payload;
  },
  RECEIVE_FLOORLIST(state, payload) {
    state.floorList = payload;
  },
};
// 修改数据  commit 触发， 回调函数进行数据更改  state作为第一个参数

// 用于异步任务 比如网络请求
const actions = {
  async getCategoryList({ commit }) {
    // TODO: 在actions中进行promise返回
    // TODO: 出现关于promise的错误 是ESLint 的配置问题, 在.eslintc.js 添加 "no-async-promise-executor":"off"规则
    return new Promise(async (resolve, reject) => {
      const result = await reqCategoryList();
      if (result.code === 200) {
        commit("RECEIVE_CATEGORYLIST", result.data);
        resolve(result.data);
        // commit 触发 mutation的方法间接更改数据
      }
    });
  },

  async getBannerList({ commit }) {
    return new Promise(async (resolve, reject) => {
      const result = await reqBannerList();
      if (result.code === 200) {
        commit("RECEIVE_BANNERLIST", result.data);
        resolve(result.data);
      }
    });
  },

  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("RECEIVE_FLOORLIST", result.data);
    }
  },
};
// 异步操作  dispatch 触发 ， 提交到mutations 不能直接状态
// const modules = {};
// store分割成模块

export default {
  state,
  getters,
  actions,
  mutations,
};

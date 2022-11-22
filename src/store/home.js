import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categoryList: [],
  floorList: [],
  bannerList: [],
};
//唯一数据源 设置状态

const getters = {};
// store 的计算属性  获取内容

//mutations 状态我唯一更改方式
const mutations = {
  RECEIVECATEGORYLIST(state, payload) {
    state.categoryList = payload;
  },
  RECEIVEBANNERLIST(state, payload) {
    state.bannerList = payload;
  },
  RECEIVEFLOORLIST(state, payload) {
    state.floorList = payload;
  },
};
// 修改数据  commit 触发， 回调函数进行数据更改  state作为第一个参数

// 用于异步任务 比如网络请求
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("RECEIVECATEGORYLIST", result.data);
      // commit 触发 mutation的方法间接更改数据
    }
  },

  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("RECEIVEBANNERLIST", result.data);
    }
  },

  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("RECEIVEFLOORLIST", result.data);
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

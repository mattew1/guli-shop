import { reqCategoryList } from "@/api";

const state = {
  categoryList: [],
};
//唯一数据源 设置状态

const getters = {};
// store 的计算属性  获取内容
const mutations = {
  RECEIVECATEGORYLIST(state, payload) {
    state.categoryList = payload;
  },
};
// 修改数据  commit 触发， 回调函数进行数据更改  state作为第一个参数
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("RECEIVECATEGORYLIST", result.data);
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

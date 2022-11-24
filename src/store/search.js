import { reqGoodsListInfo } from "@/api"; //api中解构赋值

const state = {
  goodsListInfo: {}, //初始化数据 数据为对象类型
};

const getters = {
  //用于获取数据
};

const mutations = {
  //修改数据的唯一途径\
  RECEIVE_GOODS_LIST_INFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo;
  },
};

const actions = {
  //异步操作
  async getGoodsListInfo({ commit }, searchParams) {
    const res = await reqGoodsListInfo(searchParams);
    if (res.code === 200) {
      commit("RECEIVE_GOODS_LIST_INFO", res.data);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

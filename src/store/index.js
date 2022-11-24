import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import search from "./search";

Vue.use(Vuex);

// store挂载在vue实例上
export default new Vuex.Store({
  modules: {
    home,
    search,
  },
});

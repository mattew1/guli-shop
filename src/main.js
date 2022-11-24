import Vue from "vue"; //引入vue
import App from "./App.vue"; // 引入App
import router from "./router"; //引入理由入口
import store from "./store"; //引入状态管理
import TypeNav from "@/components/TypeNav";
import SlideLoop from "@/components/SlideLoop";

Vue.component("TypeNav", TypeNav); // 全局组件注册
Vue.component(SlideLoop.name, SlideLoop); //全局组件注册

Vue.config.productionTip = false; //用于阻止vue在启动是生成生产提示

// 轮播图的解决方案 外部统一调用
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "@/mock/mockServer"; // vue项目会自动找到mock模拟数据服务 并启动它

const a = new Vue({
  router,
  store,
  render: (h) => h(App), //渲染
  /*
    render: function (createElement) {
    return createElement(App);
    } 的缩写 
  
  */
}).$mount("#app"); // 手动挂载到id为app的dom中 需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载

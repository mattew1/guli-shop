import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //引入样式

const instance = axios.create({
  baseURL: "/api",
  timeout: 10000, //超时时间
});

// 请求拦截
instance.interceptors.request.use({
  function(config) {
    NProgress.start();
    return config;
  },
  function(err) {
    return Promise.reject(err);
  },
});

//响应拦截
instance.interceptors.response.use({
  function(response) {
    NProgress.done();
    return response.data;
  },
  function(error) {
    NProgress.done();
    return Promise.reject(error);
  },
});

export default instance;

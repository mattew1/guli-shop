import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //引入样式

const instance = axios.create({
  baseURL: "/mock",
  timeout: 10000, //超时时间
});

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    NProgress.start();
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

//响应拦截
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response.data;
  },
  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          error.message = "未授权，请登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
      }
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

export default instance;

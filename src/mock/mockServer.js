import Mock from "mockjs";

import banner from "./banner.json";
import floor from "./floor.json";

// 利用Mock这个模拟数据工具，进行mock方法的调用，该mock方法将会实现拦截ajax请求的功能
// 现在拦截的地址是：/mock/banner，它将会返回数据{ code: 200, data: banner }

// 相当于进行了一个模拟数据服务器的构建
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave:false, // 进行保存代码时不进行校验

  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    //配置自动打开浏览器 端口号为8080
    // 配置代理服务器
    proxy: {
      "^/api": {
        target: "http://sph-h5-api/atguigu.cn/api",// 被替换的目标地址
        ws: true, // 表示是否代理websockets
        changeOrigin: true,//是否需要跨域
        pathWrite: {
          "^/api": "", // 路径重写
        },
      },
    },
  },
});


// target：要使用url模块解析的url字符串
// forward：要使用url模块解析的url字符串
// agent：要传递给http（s）.request的对象（请参阅Node的https代理和http代理对象）
// ssl：要传递给https.createServer（）的对象
// ws：true / false，是否代理websockets
// xfwd：true / false，添加x-forward标头
// secure：true / false，是否验证SSL Certs
// toProxy：true / false，传递绝对URL作为路径（对代理代理很有用）
// prependPath：true / false，默认值：true - 指定是否要将目标的路径添加到代理路径
// ignorePath：true / false，默认值：false - 指定是否要忽略传入请求的代理路径（注意：如果需要，您必须附加/手动）。
// localAddress：要为传出连接绑定的本地接口字符串
// changeOrigin：true / false，默认值：false - 将主机标头的原点更改为目标URL
// 使用中的注意要点：
// 使用fastmock模拟后端接口时，发现同样的三个接口，其中一个可以代理，另外两个不能代理，让人不能理解，具体配置方式如下所示：

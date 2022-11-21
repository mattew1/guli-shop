<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- a链接是能够实现vue的路由跳转？a链接去处理高亮显示是非常不方便的。 -->
            <!-- <a href="/login">登录</a>
            <a href="/register" class="register">免费注册</a> -->
            <!-- 声明式路由跳转 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
            <router-link to="/search/10">10</router-link>
            <router-link to="/search/20">20</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toSearch() {
      // 1.进行路由导航操作的时候可能设置字符串、模板字符串、对象(路由跳转)
      // this.$router.push("/search");
      // this.$router.push(`/search`);
      // this.$router.push({
      //   path: "/search",
      // });
      // 2.路由传参(设参、传参、接参、用参)
      // vue-router的URL地址参数的类型主要有哪几种？
      // params、query、hash
      // params：设参在路由，传参在链接、接参用参在组件
      // query:设参传参在链接、接参用参在组件
      // ! 问题：请问URL的组成有哪些部分？(10star)
      // this.$router.push(
      //   `/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`
      // );

      // 3.path与params是不能同时使用的，path和query能不能同时使用？
      // 万能路由跳转法，一律使用name
      // ! 问题：undefined、null、''、'123'

      // TODO: 现状是当搜索框中的内容输入并跳转以后，再进行相同内容的关键字搜索操作，这时候不光出现不再跳转的情况还会出现报错信息
      this.$router.push({
        name: "search",
        params: {
          keyword: this.keyword || undefined,
        },
        query: {
          keyword1: this.keyword.toUpperCase(),
        },
        hash: "#abc",
      });
      // 用success、error、catch进行重复路由导航出错的处理，好还是不好？不好！

      // 4.props属性的映射
    },
  },
};
</script>

<style lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>

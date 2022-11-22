<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveDivOut" @mouseenter="isShow = true">
        <!-- 用于鼠标移出 移入方法 -->
        <h2 class="all">全部商品分类</h2>
        <transition name="sort ">
          <!-- 用于过渡样式 -->
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ item_on: currentIndex === index }"
                @mouseenter="moveIn(index)"
              >
                <h3>
                  <!-- data-* 表示 html 自定义属性，可以将自定义/存储的数据拿出来在js做进一步使用 
                        并且不会覆盖html的原有属性 
                      2- data-*   属性名不应该包含任何大写字母  
                    
                  -->
                  <a
                    href="javascript:;"
                    :data-categoryname="c1.categoryName"
                    :data-category1id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:;"
                          :data-categoryname="c2.categoryName"
                          :data-category2id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:;"
                            :data-categoryname="c3.categoryName"
                            :data-category3id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash"; //按需引入 防抖
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    // 初始化数据
    return {
      currentIndex: -1, // 当前一级分类移出进去的索引
      isShow: true, //表示当前菜单是否显示
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },

    // 鼠标移入 使用lodash 的防抖函数
    moveIn: debounce(function (index) {
      this.currentIndex = index;
    }, 100),
    // 鼠标移出
    moveDivOut() {
      this.currentIndex = -1; //设置默认值
      if (this.$route.path !== "/") {
        this.isShow = false;
      }
    },
    //toSearch
    toSearch() {
      //this指向实例对象 Vuecomponent
      // 事件都有一个默认事件对象 event
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;

      if (categoryname) {
        const query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }

        const location = {
          path: "search",
          query,
        };

        if (this.$route.params) {
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
    },
  },
  async mounted() {
    await this.getCategoryList();
    // console.log(this.categoryList);
    // 用于挂载后 如果当前路由路径的判断
    if (this.$route.path !== "/") {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: rgb(162, 248, 204);
      z-index: 999;

      &.sort-enter {
        opacity: 0;
        height: 0;
      }
      &.sort.enter-active {
        transition: all 2s;
      }

      &.sort.leave-to {
        opacity: 1;
        height: 461px;
      }

      .all-sort-list2 {
        .item {
          h3 {
            // line-height: 30px;
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: rgba(26, 56, 210, 0.5);
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

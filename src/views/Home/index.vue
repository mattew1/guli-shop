<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />
    <Like />
    <Brand />
  </div>
</template>
<script>
import ListContainer from "./components/ListContainer";
import Recommend from "./components/Recommend";
import Rank from "./components/Rank";
import Like from "./components/Like";
import Floor from "./components/Floor";
import Brand from "./components/Brand";

//按需引入
import { mapState } from "vuex";
export default {
  name: "Home",
  props: {},
  components: {
    ListContainer,
    Recommend,
    Rank,
    Floor,
    Brand,
    Like,
  },
  data() {
    return {};
  },
  watch: {},

  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },

  methods: {
    getFloorList() {
      this.$store.dispatch("getFloorList");
    },
  },
  mounted() {
    // 调用获取楼层
    this.getFloorList();
  },
};
</script>
<style lang="less"></style>

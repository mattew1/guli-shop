<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
  </div>
</template>
<script>
import ListContainer from "./components/ListContainer";
import Recommend from "./components/Recommend";
export default {
  name: "Home",
  props: {},
  components: {
    ListContainer,
    Recommend,
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style scoped lang="less"></style>

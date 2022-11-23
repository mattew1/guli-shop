<template>
  <div class="outer">
    <Header />
    <router-view />
    <Footer v-if="!$route.meta.isHidden" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapActions } from "vuex";
export default {
  name: "App",
  props: {},
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    ...mapActions(["getCategoryList"]),
  },
  computed: {},
  mounted() {
    this.getCategoryList().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style scoped lang="less"></style>

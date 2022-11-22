<template>
  <div>
    Search:
    <p>{{ keyword }}</p>
    <p>{{ keyword1 }}</p>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
  </div>
</template>
<script>
export default {
  name: "Search",
  props: ["keyword", "keyword1", "a", "b"],
  components: {},
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

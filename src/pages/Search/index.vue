<template>
  <div>
    Search params: {{ $route.params.keyword }} ------ {{ keyword }}
    <br />
    query: {{ $route.query.keyword1 }} ------ {{keyword1}}
  </div>
</template>

<script>
export default {
  name: "Search",
  props:['keyword','keyword1'],

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>
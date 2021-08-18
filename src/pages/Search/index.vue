<template>
  <div>
    Search params: {{ $route.params.keyword }} ------ {{ keyword }}
    <br />
    query: {{ $route.query.keyword1 }} ------ {{ keyword2 }}
  </div>
</template>

<script>
export default {
  name: "Search",

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>
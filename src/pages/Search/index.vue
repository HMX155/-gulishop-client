<template>
  <div>
    Search
    params: {{$route.params.keyword}}
    <br>
    query: {{$route.query.keyword1}}
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
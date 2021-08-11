<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 可以这样写，但是如果后期有很多页面都不需要展示Footer  这里面就会写的很长 -->
    <!-- <Footer v-show=" $route.path !=='/login' && $route.path !== 'register' " /> -->
    <Footer v-show="!$route.meta.isHidden" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: "App",
  components:{
    Header,
    Footer
  },
 
};
</script>

<style>
</style>

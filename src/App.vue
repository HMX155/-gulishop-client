<template>
  <div>
    <h2>App组件111</h2>
    <Header/>
    <router-view></router-view>
    <Footer/>
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
  }
};
</script>

<style>
</style>

<template>
  <div>
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>品优购欢迎你 &nbsp;</li>
            <li>
              <router-link to="/login">请登录</router-link>&nbsp;
              <router-link to="/register">免费注册</router-link>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li><a href="#">我的订单</a></li>
            <li></li>
            <li class="arro_icon"><a href="#">我的品优购</a></li>
            <li></li>
            <li><a href="#">品优购会员</a></li>
            <li></li>
            <li><a href="#">企业采购</a></li>
            <li></li>
            <li class="arro_icon"><a href="#">注品册优购</a></li>
            <li></li>
            <li class="arro_icon"><a href="#">客户服务</a></li>
            <li></li>
            <li class="arro_icon"><a href="#">网站导航</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 快捷导航shortcut 模块 end -->

    <!-- ********************************************* -->

    <!-- header模块 start -->
    <header class="header w">
      <!-- logo模块 -->
      <router-link class="logo" to="/home">
        <img src="@/images/logo.png" alt="" />
      </router-link>

      <!-- 搜索模块 -->
      <div class="search">
        <input type="search" v-model="keyword" placeholder="语言开发" />
        <button @click="toSearch">搜索</button>
      </div>
      <!-- hotwords 模块制作 -->

      <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购</a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
      </div>

      <!-- 购物车模块 -->
      <div class="shopcar">
        <a href="#">我的购物车</a>
        <i class="count">8</i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toSearch() {
      // this.$router.push(
      //   "/search/" + this.keyword + "?keyword1=" + this.keyword.toUpperCase()
      // );

      //一、路由传参种类：params参数   query参数
      //params参数属于路径的一部分，路由当中匹配的时候，是要照顾这个参数
      //query参数是在路径后面以？分割，后面 a=b& c=d
      // query参数不属于路径的一部分，路由匹配的时候，不需要关心这个参数

      //二、路由路径带参数的三种写法
      //1、字符串写法
      // this.$router.push("/search/" + this.keyword + "?keyword1=" + this.keyword.toUpperCase());

      //2、模版字符串写法
      // this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`)

      //3.对象写法
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword },
      //   query: { keyword1: this.keyword.toUpperCase() },
      // });

      //面试1
      //指定params参数时可不可以用path和params配置的组合（对象写法）
      //答：不可以  只能用name与params配合
      //如果传递的参数只有query参数，没有params参数，那么我们可以不用name，可以使用path
      //如果传递的参数包含了params参数，就不能使用path

      //结论：对象写法，以后最好用name，因为那么既能和params配合，也能与query配合
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword },
      //   // path: "/search",
      //   query: { keyword1: this.keyword.toUpperCase() },
      // });

      //面试2  如何让params参数 可传可不传
      //path: '/search/:keyword?'//在路由中占位参数时后面加？

      //面试3  如果中name与params配置，但是params中数据有一个“”,无法跳转，路径会出问题
      //解决：
      //1、不传params参数
      //2、首先必须在params参数可传可不传的前提下，当传递的参数为空字符串时，传滴成undefined，就不出问题
      // this.$router
      //   .push({
      //     name: "search",
      //     params: { keyword: this.keyword || undefined },
      //     query: { keyword1: this.keyword.toUpperCase() },
      //   })
      //   .catch(() => {});   //如果后期用到 push  或者  replace 还要继续写，因此这个办法不好

      //面试4：路由组件能不能传递props数据
      //可以，可以将query或者params参数映射成为props传递给路由组件
      //实现:props:(route)=>({keyword:route.params.keyword,keyword2:route.query.keyword})

      //面试问题 5 ：vue-router使用的是3.1.0以上的版本，如果多次点击使用编程时导航，且参数未发生变化
      //  会引发NavigationDuplicated的警告
      //解决办法一：不好
      // this.$router
      //   .push({
      //     name: "search",
      //     params: { keyword: this.keyword || undefined },
      //     query: { keyword1: this.keyword.toUpperCase() },
      //   })
      //   .catch(() => {}); //如果后期用到 push  或者  replace 还要继续写，因此这个办法不好

      //解决办法二：修改router实例原型上的方法，达到一劳永逸的效果
      this.$router.push({
        name: "search",
        params: { keyword: this.keyword || undefined },
        query: { keyword1: this.keyword.toUpperCase() },
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */

em,
i {
  font-style: normal;
}

/* 去掉li 的小圆点 */

li {
  list-style: none;
}

img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;
  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle;
}

button {
  /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer;
}

a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #c81623;
}

button,
input {
  /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  /* 默认有灰色边框我们需要手动去掉 */
  border: 0;
  outline: none;
}

body {
  /* CSS3 抗锯齿形 让文字显示的更加清晰 */
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  color: #666;
}

.hide,
.none {
  display: none;
}

/* 清除浮动 */

.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}

.clearfix {
  *zoom: 1;
}
@font-face {
  font-family: "icomoon";
  src: url("/fonts/icomoon.eot?jsnp9s");
  src: url("/fonts/icomoon.eot?jsnp9s#iefix") format("embedded-opentype"),
    url("/fonts/icomoon.ttf?jsnp9s") format("truetype"),
    url("/fonts/icomoon.woff?jsnp9s") format("woff"),
    url("/fonts/icomoon.svg?jsnp9s#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

/* 版心 */

.w {
  width: 1200px;
  margin: 0 auto;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.style_red {
  color: #c81623;
}
/* 快捷导航模块 */

.shortcut {
  height: 31px;
  line-height: 31px;
  background-color: #f1f1f1;
}

.shortcut ul li {
  float: left;
}

/* 选择所有偶数的li */

.shortcut .fr ul li:nth-child(2n) {
  width: 1px;
  height: 12px;
  background-color: #6666;
  margin: 9px 15px 0;
}

.arro_icon::after {
  font-family: "icomoon";
  content: "\e91e";
  margin-left: 6px;
}

.recom_bd img {
  transition: all 0.5s;
}

.recom_bd img:hover {
  margin-top: -10px;
}

.header {
  position: relative;
  height: 105px;
  /* background-color: pink; */
}

.logo {
  position: absolute;
  top: 25px;
  width: 171px;
  height: 61px;
  /* background-color: skyblue; */
}

.logo a {
  /* font-size: 0; 京东的做法 */
  /* 淘宝的做法 让文字隐藏 */
  text-indent: -999px;
  overflow: hidden;
  display: block;
  width: 171px;
  height: 61px;
  background: url(/images/logo.png) no-repeat;
}

.search {
  position: absolute;
  left: 346px;
  top: 25px;
  width: 538px;
  height: 36px;
  border: 2px solid #b1191a;
}

.search input {
  float: left;
  width: 454px;
  height: 32px;
  padding-left: 10px;
}

.search button {
  float: left;
  width: 80px;
  height: 32px;
  background-color: #b1191a;
  font-size: 16px;
  color: #fff;
}

.hotwords {
  position: absolute;
  top: 66px;
  left: 346px;
}

.hotwords a {
  margin: 0 10px;
}

.shopcar {
  position: absolute;
  top: 25px;
  right: 60px;
  width: 140px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #dfdfdf;
  background-color: #f7f7f7;
}

.shopcar::before {
  color: #b1191a;
  font-family: "icomoon";
  content: "\e93a";
  margin-right: 5px;
}

.shopcar::after {
  font-family: "icomoon";
  content: "\e920";
  margin-left: 10px;
}

.count {
  position: absolute;
  top: -5px;
  left: 105px;
  height: 14px;
  line-height: 14px;
  color: #fff;
  background-color: #e60012;
  padding: 0 5px;
  border-radius: 7px 7px 7px 0;
}
</style>
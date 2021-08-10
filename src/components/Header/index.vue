<template>
  <div>
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>品优购欢迎你 &nbsp;</li>
            <li>
              <a href="#">请登录</a>&nbsp;<a href="#" class="style_red"
                >免费注册</a
              >
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
      <div class="logo">
        <img src="@/images/logo.png" alt="">
      </div>

      <!-- 搜索模块 -->
      <div class="search">
        <input type="search" name=" " id="" placeholder="语言开发" />
        <button>搜索</button>
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
    font-style: normal
}


/* 去掉li 的小圆点 */

li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}


/* 清除浮动 */

.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
@font-face {
    font-family: 'icomoon';
    src: url('/fonts/icomoon.eot?jsnp9s');
    src: url('/fonts/icomoon.eot?jsnp9s#iefix') format('embedded-opentype'), url('/fonts/icomoon.ttf?jsnp9s') format('truetype'), url('/fonts/icomoon.woff?jsnp9s') format('woff'), url('/fonts/icomoon.svg?jsnp9s#icomoon') format('svg');
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
    font-family: 'icomoon';
    content: '\e91e';
    margin-left: 6px;
}

.recom_bd img {
    transition: all 0.5s;
}

.recom_bd img:hover {
    margin-top:-10px;
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
    font-family: 'icomoon';
    content: '\e93a';
    margin-right: 5px;
}

.shopcar::after {
    font-family: 'icomoon';
    content: '\e920';
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
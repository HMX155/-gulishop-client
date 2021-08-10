<template>
  <div>
    <!-- 底部模块的制作 star -->
    <footer class="footer">
      <div class="w">
        <div class="mpd_service">
          <ul>
            <li>
              <h5 class="zheng"></h5>
              <div class="service_txt">
                <h4>正品保障</h4>
                <p>正品保障，提供发票</p>
              </div>
            </li>
            <li>

              <h5 class="ji"></h5>
              <div class="service_txt">
                <h4>极速物流</h4>
                <p>极速物流，急速送达</p>
              </div>
            </li>
            <li>

              <h5 class="wu"></h5>
              <div class="service_txt">
                <h4>无忧售后</h4>
                <p>7天无理由退货</p>
              </div>
            </li>
            <li>

              <h5 class="te"></h5>
              <div class="service_txt">
                <h4>特色服务</h4>
                <p>私人订制家电套餐</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mod_help">
          <dl>
            <dt><a href="#">服务指南</a></dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
          <dl>
            <dt><a href="#">服务指南</a></dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
          <dl>
            <dt><a href="#">服务指南</a></dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
          <dl>
            <dt><a href="#">服务指南</a></dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
          <dl>
            <dt><a href="#">服务指南</a></dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
          <dl>
            <dt><a href="#">帮助中心</a></dt>
            <dd class="ewm">
              <img src="images/ewm.png" alt="" />
              <img src="images/shoppingcar.png" alt="" /> 品优购客户端
            </dd>
          </dl>
        </div>

        <div class="mod_copyright">
          <div class="link">
            <a href="#">关于我们&nbsp;</a>| <a href="#">联系我们&nbsp;</a>|
            <a href="#">联系客服&nbsp;</a>| <a href="#">商家入驻&nbsp;</a>|
            <a href="#">营销中心&nbsp;</a>| <a href="#">手机品优购&nbsp;</a>|
            <a href="#">友情链接&nbsp;</a>| <a href="#">销售联盟&nbsp;</a>|
            <a href="#">品优购社区&nbsp;</a>| <a href="#">品优购公益&nbsp;</a>|
            <a href="#">English Site&nbsp;</a>|
            <a href="#">Contact U&nbsp;</a>
          </div>

          <div class="copyright">
            地址:北京市昌平区建材城西路金燕龙办公楼一层邮编:100096电话
            传真:010-82935100邮箱:zhanghj+itcast.cn <br />
            京ICP备08001421号京公网安备110108007702 :400-618-4000
          </div>
        </div>
      </div>
    </footer>
    <!-- 底部模块的制作 end -->
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
/* 底部模块制作 */

.footer {
  padding-top: 30px;
  height: 415px;
  background-color: #f5f5f5;
}

.mpd_service {
  height: 80px;
  border-bottom: 1px solid #ccc;
}

.mpd_service ul li {
  float: left;
  width: 300px;
  height: 50px;
  /* background-color: pink; */
  padding-left: 35px;
}

.mpd_service ul li h5 {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 8px;
}

.mpd_service ul li .zheng {
  background: url(/images/1.png) center no-repeat #c81623;
}

.mpd_service ul li .ji {
  background: url(/images/2.png) center no-repeat #c81623;
}

.mpd_service ul li .wu {
  background: url(/images/3.png) center no-repeat #c81623;
}

.mpd_service ul li .te {
  background: url(/images/4.png) center no-repeat #c81623;
}



.service_txt h4 {
  font-size: 14px;
}

.service_txt p {
  font-size: 12px;
}

.mod_help {
  padding-top: 20px;
  height: 185px;
  border-bottom: 1px solid #ccc;
}

.mod_help dl {
  float: left;
  width: 200px;
}

.mod_help dl:last-child {
  width: 100px;
  text-align: center;
}

.mod_help dl dt {
  font-size: 16px;
  margin-bottom: 10px;
}

.mod_help dl .ewm {
  position: relative;
}

.mod_help dl dd img:last-child {
  position: absolute;
  top: 38px;
  right: 41px;
  float: left;
}

.mod_copyright {
  text-align: center;
  padding-top: 20px;
}

.mod_copyright .link {
  padding-bottom: 15px;
}

.copyright {
  line-height: 20px;
}

</style>
import Vue from 'vue'
//引入路由
import VueRouter from "vue-router"

//使用组件
Vue.use(VueRouter)

//引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//VueRouter  是路由器对象的构造函数  
//this.$router.push调用的是路由器对象的方法，这个方法并不是路由器实例化对象的方法，而是这个对象原型上的方法


//这个实例化对象原型的方法，就是Vuerouter的显示原型的方法
//this.router是实例化对象,是VueRouter的实例化对象

//将原来有的push方法地址，保存起来，后期还能拿到原来的
const origionPush = VueRouter.prototype.push
const origionReplace = VueRouter.prototype.replace
//可以大胆的去修改原型上的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function (location, onResolved, onRejected) {
    //localtion是我们调用this.$router.push传递进来的对象

    //   {  name: "search",
    //     params: { keyword: this.keyword || undefined },
    //     query: { keyword1: this.keyword.toUpperCase() },
    //   }

    if (onResolved === undefined && onRejected === undefined) {
        //证明调用时值传递进去了一个匹配路由的对象，没有传递成功或者失败的回调
        return origionPush.call(this.location).catch(() => { })
    }else{
        //证明调用的时候传递了策划稿内功或者失败的回调
        return origionPush.call(this.location,onResolved,onRejected)
    }
}

VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    //localtion是我们调用this.$router.replace传递进来的对象

    //   {  name: "search",
    //     params: { keyword: this.keyword || undefined },
    //     query: { keyword1: this.keyword.toUpperCase() },
    //   }

    if (onResolved === undefined && onRejected === undefined) {
        //证明调用时值传递进去了一个匹配路由的对象，没有传递成功或者失败的回调
        return origionReplace.call(this.location).catch(() => { })
    }else{
        //证明调用的时候传递了策划稿内功或者失败的回调
        return origionReplace.call(this.location,onResolved,onRejected)
    }
}

//需要想外暴露一个路由器对象
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search/:keyword?',   //params参数需要提前占位，?代表我的params参数可传可不传
            component: Search,
            name: "search", //命名路由
            // props:   //这个props是我们在路由组件中操作params参数和query参数的简化方法
            // props:true,// 会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
            // props:{
            //     userName:"赵丽颖"     //传递一个对象，传递的是额外需要的静态数据,不需要就不需要传递
            // }
            props: (route) => {
                return {
                    keyword: route.params.keyword,
                    keyword1: route.query.keyword1

                }
            }

        },
        {
            path: '/login',
            component: Login,
            //路由配置项中的元配置项 可以配置我们所需要的所有数据
            meta: {
                isHidden: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isHidden: true
            }
        },
        //路由重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]   //配置路由
})


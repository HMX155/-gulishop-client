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
            props:true,// 会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作

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


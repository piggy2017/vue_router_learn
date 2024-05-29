/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 14:24:15
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-27 13:42:03
 * @Description: 
 */
// import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import About from '../pages/aboutCom.vue'
import Home from '../pages/homeCom.vue'
import News from '../pages/NewsCom.vue'
import Messages from '../pages/MessagesCom.vue'
import MessageDetail from '../pages/messageDetail.vue'

// 对于url来说,#后面的内容就是hash值,hash值不会包含在http请求中,不会被服务器解析,只会在客户端解析
// hash模式的路由,地址中带有#号,例如: http://localhost:8080/#/home,但兼容性较好
// history模式的路由,地址中不带#号,例如: http://localhost:8080/home,但需要服务器端支持,解决刷新页面404的问题
const router= new VueRouter({
    mode: 'history',    // 默认是hash模式,hash模式带有#号,history模式不带#号
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            children: [
                {
                    name: "news",
                    path: 'news',
                    component: News,
                    meta: {
                        title: 'news',
                        isAuth: true
                    }
                },
                {
                    name: 'messages',
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            // path:'detail',  
                            path: 'detail/:id/:title',  // 通过params传参
                            component: MessageDetail,
                            name: 'xiangqing',
                        }
                    ]
                },
            ]
        },
        {
            path: '/about',
            meta: {
                title: '关于我们',
            },
            component: About
        },
        {
            path: '/singleRouter',
            meta: {
                title: '独享路由守卫',
            },
            component: () => import('../pages/singleRouter.vue'),
            beforeEnter(to, from, next) {
                // 独享路由守卫beforeEnter 会在路由切换之前执行
                // 可以和全局路由守卫 beforeEach 处理一样的逻辑,例如进行权限、登录判断等.
                console.log('beforeEnter', to, from);
                next();
            }
        },
        {
            path: '/login',
            meta: {
                title: '登录页',
            },
            component: () => import('../pages/LoginCom.vue')
        },
    ]
})

// 路由守卫 :1.全局路由守卫 2.路由独享守卫 3.组件内的守卫

// 全局前置路由守卫,每一次路由切换之前都会执行
router.beforeEach((to, from, next) => {
    // console.log('beforeEach', to, from);
  
    // if(to.meta.isAuth) {   // 判断是否需要登录
    //   if(localStorage.getItem('login') === 'true') { 
    //     next();
    //   } else {
    //     next('/login');
    //   }
    // }
    if(to.name === 'messages') {
      next({name: 'xiangqing', params: {id: 1, title: 'message1'}});  // 可以篡改路由的跳转和穿参
    }
    next();
  });
  
  // 全局后置路由守卫,每一次路由切换之后都会执行
  router.afterEach((to, from) => {
    console.log('afterEach', to, from);
    document.title = to.meta.title || 'vue-router';
  })
  
  // 路由独享守卫 beforeEnter
  
  
  // 组件内的守卫 beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave
  // beforeRouteEnter 通过路由规则,进入该组件时被调用
  // beforeRouteUpdate 通过路由规则,更新该组件时被调用
  // beforeRouteLeave 通过路由规则,离开该组件时被调用


export default router;
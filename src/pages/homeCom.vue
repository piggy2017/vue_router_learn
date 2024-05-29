<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 14:07:22
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-23 15:39:02
 * @Description: 
-->
<template>
    <div>
        <p>我是home组件,下面有嵌套路有</p>
        <router-link to="/home/news">go news</router-link>
        <router-link to="/home/messages">go messages</router-link>
        <!-- <router-view></router-view> -->
        <!-- include指的是组件的name属性值,不是路由的name属性 -->
        <pre>
            keep-alive:当路由切换,让组件保持挂载,不被销毁.
            1. 作用: 控制缓存的组件,只有在include中的组件才会被缓存
            2. include属性的值: 字符串,数组,正则表达式
        </pre>
        <keep-alive include="NewsCom">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 14:59:06
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-23 15:57:49
 * @Description: 
-->
<template>
    <div>
        <p>我是news组件</p>
        <p>当组件被 keep-alive 缓存的时候,组件不会被销毁,也就是不会触发 beforeDestroy() </p>
        <p>但可以触发 deactivated和deactivated</p>
        <ul>
            <li>新闻1</li>
            <li>新闻2</li>
            <li>新闻3</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"NewsCom",
    activated() { // keep-alive组件激活时才能触发
        console.log('news组件被激活了')
    },
    deactivated() {
        console.log('news组件被停用了')
    },


    beforeRouteEnter(to, from, next) {
        console.log('news组件 beforeRouteEnter');
        console.log("news组件 beforeRouteEnter to, from",to, from)
        // 可以在这个路由守卫进行权限判断等,如果不满足条件,可以不让进入,跳转到其他页面
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('news组件 beforeRouteLeave')
        console.log('news组件 beforeRouteLeave to, from',to, from)
        next()
    },
}
</script>

<style>

</style>
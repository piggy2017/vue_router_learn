<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 14:07:26
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-27 13:41:20
 * @Description: 
-->
<template>
  <div>我是about组件</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 点击浏览器的返回按钮返回到about路由也会触发这个钩子函数
    console.log("about  组件 beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("about 组件 beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>
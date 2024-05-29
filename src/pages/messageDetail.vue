<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 15:15:11
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-21 15:40:27
 * @Description: 
-->
<template>
    <div>
        <p>我是messageDetail组件</p>
        <p>通过$route.query获取到的参数：</p>
        <p>我的id:{{ $route.query.id }},我的title:{{ $route.query.title }}</p>

        <p>通过$route.params获取到的参数：</p>
        <p>我的id:{{ $route.params.id }},我的title:{{ $route.params.title }}</p>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>
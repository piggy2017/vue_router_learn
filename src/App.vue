<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 13:49:41
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-23 15:50:41
 * @Description: 
-->
<template>
  <div id="app">
    <router-link class="link-item" active-class="link-item-active" to="/about">About</router-link>
    <router-link class="link-item" active-class="link-item-active" to="/home">Home</router-link>
    <router-link class="link-item" active-class="link-item-active" to="/singleRouter">独享路由守卫组件</router-link>
    <router-view/>
    <!-- <Home/>
    <About/> -->
  </div>
</template>

<script>

// import Home from './components/homeCom.vue'
// import About from './components/aboutCom.vue'

export default {
  name: 'App',
  components: {
    // Home,About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-item{
  width: 140px;
  height: 60px;
  border: 1px solid #000;
  display: inline-block;
  border-radius: 8px;
  line-height: 60px;
  text-decoration: none;
}
.link-item-active{
  color: #f00;
  background-color: bisque;
}
</style>

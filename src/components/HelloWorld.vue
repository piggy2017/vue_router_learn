<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 13:49:41
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-21 15:36:51
 * @Description: 
-->
<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h3>vue 路由携带参数的两种方式 query 和 params</h3> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

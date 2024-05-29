/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 13:49:41
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-23 15:54:35
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import router from './router/index.js';

Vue.config.productionTip = false
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

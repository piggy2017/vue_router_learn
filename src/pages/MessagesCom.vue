<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-21 14:58:30
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-23 15:09:02
 * @Description: 
-->
<template>
    <div>
        <pre>
            router-link 的replace属性;
            1. 作用: 控制路由跳转时是否留下历史记录
            2.浏览器的历史记录有两种写入模式:分别为push和replace,push是追加历史记录,replace是替换当前记录,路由跳转默认是push模式
            3. replace属性的值: true/false,默认为false
        </pre>
        <p>我是messages组件</p>
        <ul>
            <li v-for='item in messageList' :key="item.id">
                <!-- 跳转路由并携带 query 参数,to的字符串写法 -->
                <!-- <router-link :to="`/home/messages/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

                <!-- 跳转路由并携带 query 参数,to的对象写法 -->
                <!-- <router-link :to="{
                    // path:'/home/messages/detail',
                    name:'xiangqing',  // 推荐使用 name
                    query:{
                        ...item
                    }
                }">{{item.title}}</router-link> -->

                <!-- 跳转路由并携带 params 参数,to的字符串写法 -->
                <!-- <router-link :to="`/home/messages/detail/${item.id}/${item.title}`">{{item.title}}</router-link> -->
                <!-- 跳转路由并携带 params 参数,to的字对象写法 -->
                <router-link replace :to="{
                    name:'xiangqing', // 这儿只能写name,如果通过path写的话,会报错
                    params:{
                        ...item
                    }
                }">{{item.title}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            messageList: [
                {id:'0001',title:"消息0001"},
                {id:'0002',title:"消息0002"},
                {id:'0003',title:"消息0003"},
            ]
        }
    },
    activated(){  // keep-alive组件激活时才能触发
        console.log('messages组件被激活了')
    }
}
</script>

<style>

</style>
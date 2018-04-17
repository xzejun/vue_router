<template>
<!--NavBar.Vue页面，主要用于页面切换的导航组件-->
    <nav class="app-nav">
        <ul class="ul-father">
            <li class="li-father" v-for="item in arr" :key="item.id"  v-on:mouseover="item.show = ! item.show" v-on:mouseout="item.show = ! item.show" v-bind:class="{bgchange: item.show}">
            <!-- 路由切换组件 -->
                <router-link v-bind:to="item.url">
                    {{ item.title }}
                </router-link>
                <template v-if="item.value">
                    <ul class="ul-child" v-show="item.show">
                        <li class="li-child" v-for="x in item.value" :key="x.id">
                            <a href="javascript:;">
                                {{ x }}
                            </a>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: "app-nav",
        data (){
            return {
                arr: [
                    {
                        title: "首页", 
                        value: ["一","二","三","四"],
                        url: "/",
                        show: false
                    },
                    {
                        title: "新闻" ,
                        value: ["二","二","三","四"],
                        url: "/content",
                        show: false
                    },
                    {
                        title:  "关于",
                        value: ["二","二","三","四"],
                        url: "/about",
                        show: false
                    },
                    {
                        title: "投稿",
                        value: ["二","二","三","四"],
                        url: "/submit",
                        show: false
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .app-nav{
        margin-bottom: 20px;
    }
    ul.ul-father {
      background: Lightgreen;
      margin: 0;
    }
    .li-father {
        position: relative;
        display: inline-block;
        width: 20%;
      margin: 0;
    }
    li a {
        display: block;
      padding: 15px 0;
      color: #333;
      text-decoration: none;
    }
    li a:hover,.bgchange>a{
        color: #fff;
        background: #222;
    }
    .ul-child{
        position: absolute;
        top: 51px;
        left: 0;
        width: 100%;
        background: Lightgreen;
    }
</style>


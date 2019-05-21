<template>
    <div class="main">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <p class="menuItem"><router-link to="/first">first</router-link></p>
        <p class="menuItem"><router-link to="/second">second</router-link></p>
        <transition name="fade">
            <router-view />
        </transition>

    </div>
</template>

<style>
    .main{position: absolute; top:82px;
    left:225px;bottom:0;right: 0;
    border:1px solid #eee;
        padding: 10px 20px;}

    .fade-enter-active, .fade-leave-active {
        transition: all 2s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>
    export default {
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave')
            next()
        }
    }
</script>
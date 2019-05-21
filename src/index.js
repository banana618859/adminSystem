import Vue from 'vue'
import Index from './index.vue'
import '../assets/style/global.css'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import store from './store/store'


const firstDiv = document.createElement('div')
document.body.appendChild(firstDiv)

Vue.use(VueRouter)
const router = createRouter()

/*router.beforeEach((to, from, next) => {
        console.log("router beforeEach invoked")
        next()
})

router.beforeResolve((to,from,next) => {
    console.log("router beforeResolve invoked")
    next()
})

router.afterEach((to,from) => {
    console.log("router afterEach invoked")
})*/

new Vue({
    router,
    store,
    render: (h) => h(Index)//箭头函数，要用babel-loader解析才行
}).$mount(firstDiv)



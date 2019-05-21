
import First from '../first.vue'
import Second from '../second.vue'
import Third from '../third.vue'
import Welcome from '../welcome.vue'
import Login from '../login.vue'
import App from '../app.vue'

export default [
    {
        path:'/',
        redirect:'/logout'
    },
    {
        path: '/logout',
        component: Login
    },
    {
        path: '/app',
        component: App,
        children:[
            {
                path: '/app/',
                redirect: '/app/welcome'
            },
            {
                path: '/app/welcome',
                component: Welcome,
                pageName: '首页'
            },
            {
                path: '/app/first',
                component: First,
                pageName: '个人信息'
            },
            {
                path: '/app/second',
                component: Second,
                pageName: '部门信息'
            },
            {
                path: '/app/third',
                component: Third,
                pageName: '权限管理'
            },
            {
                path: '/logout',
                pageName: '退出系统'
            }
        ]
    }
]


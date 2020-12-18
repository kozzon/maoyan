//! 这里写的就是全局导航守卫
import router from './index'
import api from '@/api'
import request from '@/utils/request'
import {getCookie} from '@/utils/cookie'
import { Notify } from 'vant';
// console.log('router',router)
//! 全局前置守卫  router.beforeEach((to,from,next) => {})
// beforeEach 触发条件： 只要有路由跳转就会触发
// beforeEach回调函数时不允许你去放 async
router.beforeResolve((to,from,next) => {
    /* 
        * to 表示目标源，   比如我们从 /a 跳到 /b   这个时候 to记录了/b的路由信息
        * from  表示当前源 ， 比如我们从 /a 跳到 /b   这个时候 from记录了/a的路由信息
        * next表示目标源和当前源之间的连接 
            * next可以控制页面跳转 ， 相当于桥的作用   
    */
    //    console.log('to',to)
    //    console.log('from',from)
    //    console.log('next'next)
    //！业务： 如果用户没有登录，那么自动跳转到登录页面
        // 分析： 用户有没有登录，是通过token来做判断的
    // request({
    //     url: api.tokenApi,
    //     data: {
    //         token: getCookie('token')
    //     }
    // }).then(({status}) => {
    //     // console.log('res',res)
    //     const {path} = to
    //     if (status == 1 || path == '/login') {
    //         next() 
    //         // next(true)
    //     } else {
    //         next('/login')
    //     }
    // }).catch(error => Promise.reject(error))


    async function checkToken () {
        const {path} = to 
        const {status } =await request({
            url: api.tokenApi,
            data: {
                token: getCookie('token')
            }
        })
        if (status==1||path=='/login') {
            next()
        } else {
            next('/login')
        }
    }
    checkToken()

})

// 后置钩子
router.afterEach((to,from) => {
    /* 
        * 后置守卫只有to,from两个参数，没有next,它没法做拦截功能 
        * 作用： 提示类型的功能
    */
//    console.log('to',to)
//    console.log('from',from)
    const {path} = from 
    if (path == '/search') {
        // 表示我们现在要从search离开了 
        Notify({ type: 'success', message: '您正在离开search页面' });
    }
})
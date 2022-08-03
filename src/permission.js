import router from '@/router' // 引入路由实例
import store from '@/store' // 引入vuex store实例
const whiteList = ['/login', '/404'] // 定义白名单  所有不受权限控制的页面
//路由（全局）前置守卫
//会在所有路由进入之前触发
//to:去哪里的路由信息
//from:来自有哪个路由的信息
//next:是否进入
router.beforeEach((to, from, next) => {
    const token = store.state.user.token
    if (token) {
       if(!store.state.user.userinfo.userId){
        store.dispatch('user/getuserinfo')
       }
        //1.登录
        //是否进入登录页
        if (to.path === '/login') {
            //1.1 是  就跳到首页
            next('/')
        } else {
            //1.2  不是就直接进入
            next()
        }
    } else {
        //2.未登录
        //访问单独是否在白名单（未登录也能访问的页面）
        const isCludes = whiteList.includes(to.path)
        if (isCludes) {
            //2.1 在白名单  放行
            next()
        } else {
            //2.2 不在白名单（不登录不能访问）  就跳到登录页
            next('/login')
        }
    }
})
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: () => import("../views/home/Home")
    }, {
      path: '/category',
      component: () => import("../views/category/Category")
    }, {
      path: '/shopcat',
      component: () => import("../views/shopcat/ShopCat")
    }, {
      path: '/profile',
      component: () => import("../views/profile/Profile")
    }, {
      path: '/detail/:id',
      component: () => import('../views/detail/Detail')
    }

  ],
  mode: 'history'
})

export default router

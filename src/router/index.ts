//! 这个文件用于路由配置
// 1. 引入路由配置需要的文件
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//push
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

//replace
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};
// 路由懒加载
const Home = () => import(/*webpackChunkName:'home'*/ "../pages/home");
const Hot = () => import(/*webpackChunkName:'hot'*/ "../pages/home/Hot.vue");
const Cinema = () =>
  import(/*webpackChunkName:'cinema'*/ "../pages/home/Cinema.vue");
const Coming = () =>
  import(/*webpackChunkName:'coming'*/ "../pages/home/Coming.vue");
const Classic = () =>
  import(/*webpackChunkName:'classic'*/ "../pages/home/Classic.vue");
const Category = () =>
  import(/*webpackChunkName:'category'*/ "../pages/category");
const Car = () => import(/*webpackChunkName:'car'*/ "../pages/car");
const Active = () => import(/*webpackChunkName:'active'*/ "../pages/active");
const Mine = () => import(/*webpackChunkName:'mine'*/ "../pages/mine");
const City = () => import(/*webpackChunkName:'city'*/ "../pages/city/city.vue");
const Search = () =>
  import(/*webpackChunkName:'search'*/ "../pages/search/search.vue");
const Movie = () =>
  import(/*webpackChunkName:'movie'*/ "../pages/movie/Movie.vue");
const QuestionNaire = () =>
  import(/*webpackChunkName:'error'*/ "../pages/questionnaire");
const Error = () => import(/*webpackChunkName:'error'*/ "../pages/404");

import useCheckToken from "../hooks/checkToken";

// 创建一个路由实例
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/", // http://localhost:3000/
      redirect: "/home", // redirect 重定向
    },
    {
      path: "/home",
      component: Home,
      redirect: "/home/hot",
      children: [
        {
          path: "hot",
          component: Hot,
          meta: {
            title: "热映",
          },
          // children:[
          //   {
          //     path:"/movie/:id",
          //     component:Movie,
          //     meta:{
          //       title:"电影"
          //     },
          //     name:"movie"
          //   },
          // ]
        },
        {
          path: "cinema",
          component: Cinema,
          meta: {
            title: "影院",
          },
        },
        {
          path: "coming",
          component: Coming,
          meta: {
            title: "待映",
          },
        },
        {
          path: "classic",
          component: Classic,
          meta: {
            title: "经典电影",
          },
        },
      ],
    },
    {
      path: "/movie/:id",
      component: Movie,
      meta: {
        title: "电影",
      },
      name: "movie",
    },
    {
      path: "/category",
      component: Category,
      meta: {
        title: "分类",
      },
    },
    {
      path: "/active",
      component: Active,
      meta: {
        title: "活动",
      },
    },
    {
      path: "/car",
      component: Car,
      meta: {
        title: "购物车",
      },
      beforeEnter (to,from,next) {
        // 有拦截功能，而且拦截的是一个
        useCheckToken(to,next)
      }
    },
    {
      path: "/mine",
      component: Mine,
      meta: {
        title: "我的",
      },
      beforeEnter (to,from,next) {
        // 有拦截功能，而且拦截的是一个
        useCheckToken(to,next)
      }
    },
    {
      path: "/quest",
      component: QuestionNaire,
      meta: {
        title: "调查问卷",
      },
      name: "quest",
    },
    {
      path: "/search",
      component: Search,
      // 元数据
      meta: {
        title: "搜索",
      },
    },
    {
      path: "/city",
      component: City,
    },
    // 错误路由匹配要写在路由表最下层
    {
      path: "*",
      component: Error,
    },
  ],
});

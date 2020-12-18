<template>
  <div id="tab">
    <div class="tabtab">
      <van-icon name="arrow-left" v-show="flag" @click="back" />
      <h3 v-if="!movieflag"> KOZZON {{ $route.meta.title }}</h3>
      <h3 v-else-if="$route.params.detail">{{ $route.params.detail.name }}</h3>
      <van-icon @click="changeMenuFlag" name="wap-nav" />
      <div class="mask" v-show="menu_flag">
        <ul>
          <li v-for="item in list" :key="item.id">
            <a href="">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Download v-if="Downflag"></Download>
    <Topbar v-if="Topflag"></Topbar>
  </div>
</template>

<script>
import Download from "../pages/home/Download";
import Topbar from "../pages/home/Topbar";
export default {
  data() {
    return {
      flag: false,
      menu_flag: false,
      Downflag: true,
      Topflag: true,
      movieflag:false,
      list: [
        {
          id: 1,
          text: "首页",
          path: "/home",
        },
        {
          id: 2,
          text: "榜单",
          path: "/top",
        },
        {
          id: 3,
          text: "热门",
          path: "/hot",
        },
        {
          id: 4,
          text: "商城",
          path: "/shop",
        },
      ],
    };
  },
  watch: {
    $route() {
      const { path } = this.$route;
      if (path === "/home/hot") {
        this.flag = false;
      } else {
        this.flag = true;
      }
      this.checkTabTabBar();
    },
  },
  methods: {
    changeMenuFlag() {
      this.menu_flag = !this.menu_flag;
    },
    back() {
      this.$router.back();
    },
    checkTabTabBar() {
      // 有的路由要关闭，有的路由要开启
      let { path } = this.$route;
      if(path.indexOf('/movie')!==-1){
        path = '/movie'
      }
      switch (path) {
        case "/search":
          this.Downflag = false;
          this.Topflag = false;
          this.movieflag = false
          break;
        case "/movie":
          // this.Downflag = false;
          this.Topflag = false;
          this.movieflag = true
          break;
        default:
          this.Downflag = true;
          this.Topflag = true;
          this.movieflag = false
          break;
      }
    },
  },
  components: {
    Download,
    Topbar,
  },
};
</script>

<style lang="scss" scoped>
@import "Assets/style/color.scss";
#tab {
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tabtab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 345px;
    height: 51.5px;
    padding: 0 15px;
    background: $theme_color;
    color: white;
    h3 {
      text-align: center;
      flex: 1;
      font-size: 18px;
      font-weight: normal;
    }
  }

  .mask {
    position: fixed;
    right: 12px;
    top: 46px;
    background: white;
    box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);
    z-index: 99;
    width: 110px;
    height: 185px;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      li {
        height: 25%;
        line-height: 45.5px;
        text-align: center;
        font-size: 15px;
        border-bottom: 1px solid #f0f0f0;
        a {
          color: #333;
        }
      }
    }
  }
}
// #download{
//   width: 100%;
//   height: 60px;
//   border-bottom: 1px solid #e8e8e8;
//   span{
//     display: inline-block;
//     font-weight: 900;
//   }
//   img{
//     width: 94px;
//     height:39px;
//     vertical-align: middle;
//     margin-left:10px;
//   }
//   .find{
//     line-height: 58px;
//     font-size: 14px;
//     color:#666;
//     margin-left: 58px;
//   }
//   .open{
//     line-height: 60px;
//     font-size: 16px;
//     color: #b37e7e;
//     margin-right: 10px;
//     float: right;
//   }
// }
</style>

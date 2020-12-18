<template>
  <!-- <div :class="{wrapper:wrapperflag}" > -->
  <div class="app">
    <Tab v-if="tabFlag"></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="tabBarFlag"></TabBar>
  </div>
  <!-- </div> -->
</template>
<script>
import Tab from "Comp/Tab";
import TabBar from "Comp/TabBar";
import Home from "Pages/home";
export default {
  data() {
    return {
      tabFlag: true,
      tabBarFlag: true,
      // wrapperflag: false
    };
  },
  watch: {
    $route() {
      this.checkTabTabBar();
    },
  },
  methods: {
    checkTabTabBar() {
      // 有的路由要关闭，有的路由要开启
      let { path } = this.$route;
      if (path.indexOf("/movie") !== -1) {
        path = "/movie";
      }
      switch (path) {
        case "/city":
          this.tabFlag = false;
          this.tabBarFlag = false;
          break;
        case "/search":
          this.tabBarFlag = false;
          // this.tabFlag = false
          break;
        case "/movie":
          this.tabBarFlag = false;
          // this.wrapperflag= true
          break;
        default:
          this.tabBarFlag = true;
          this.tabFlag = true;
          break;
      }
    },
  },
  components: {
    Tab,
    Home,
    TabBar,
  },
};
</script>
<style lang="scss">
@import "./assets/style/reset.scss";
// .wrapper{
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#container {
  flex: 1;
  // height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
}
</style>

<template>
  <div id="topbar">
    <div>
      <span class="city_name" @click="toCity">
        {{ thiscity ? thiscity : "杭州" }}
        <!-- {{ this.$route.meta.city }} -->
        <van-icon name="arrow-down" />
      </span>
    </div>
    <van-tabs @click="onClick" v-model="activeIndex">
      <van-tab v-for="item in navs" :key="item.id" :title="item.text">
      </van-tab>
    </van-tabs>
    <div class="search">
      <router-link tag="span" to="/search">
        <van-icon name="search" />
      </router-link>
    </div>
    <!-- <Banner></Banner> -->
  </div>
</template>

<script>
// import Banner from "./Banner"

export default {
  data() {
    return {
      activeIndex: 0,
      thiscity: "",
      navs: [
        {
          id: 1,
          text: "热映",
          path: "/home/hot",
        },
        {
          id: 2,
          text: "影院",
          path: "/home/cinema",
        },
        {
          id: 3,
          text: "待映",
          path: "/home/coming",
        },
        {
          id: 4,
          text: "经典电影",
          path: "/home/classic",
        },
      ],
    };
  },
  watch: {
    $route() {
      const { path } = this.$route;
      switch (path) {
        case "/home/hot":
          this.activeIndex = 0;
          break;

        case "/home/cinema":
          this.activeIndex = 1;
          break;
        case "/home/coming":
          this.activeIndex = 2;
          break;
        case "/home/classic":
          this.activeIndex = 3;
          break;
        default:
          this.activeIndex = 0;
          break;
      }
    },
  },
  methods: {
    onClick(index, title) {
      this.navs.forEach((v, i) => {
        if (title === v.text) {
          this.$router.push(v.path);
          // this.$router.push(item.path)
        }
      });
    },
    toCity() {
      this.$router.push("/city");
    },
  },
  mounted() {
    this.thiscity = this.$route.meta.city;
  },
  // components:{
  //   Banner,
  // }
};
</script>

<style lang="scss" scoped>
#topbar {
  font-size: 15px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  .city_name {
    margin-left: 20px;
  }
  .van-tabs {
    flex: 1;
  }
  .search {
    padding: 3px 15px 10px 10px;
    font-size: 20px;
    color: red;
    font-weight: 900;
  }
}
</style>

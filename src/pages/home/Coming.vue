<template>
  <div id="coming" @scroll="show">
    <van-loading size="24px" v-if="!list && !banners">
      加载中...
    </van-loading>
    <Banner></Banner>
    <div v-swipeleft="forward" v-swiperight="back">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutRight"
      >
        <ul>
          <router-link
            tag="li"
            :to="{
              name: 'movie',
              params: {
                id: item.id,
                detail: item,
                showflag: true,
              },
              query: {
                r: 'index/ajaxcat',
              },
            }"
            v-for="(item, index) in list"
            :key="index"
          >
            <img :src="item.pic" alt="" width="64px" height="90px" />
            <h1 class="name">
              {{ item.name }}
              <span class="twod" v-if="item.twod == true">
                <img :src="item.twopic" alt="" />
              </span>
            </h1>
            <p class="score" v-if="item.ticket == true">
              观众评 <span>{{ item.score }}</span>
            </p>
            <p class="score" v-else>
              <span>{{ item.score }}</span> 人想看
            </p>
            <p class="star">{{ item.star }}</p>
            <p class="number">{{ item.number }}</p>
            <span class="ticket" v-if="item.ticket == true">
              购票
            </span>
            <span class="preticket" v-else>
              预售
            </span>
          </router-link>
        </ul>
      </transition>
      <!-- <List></List> -->
    </div>
    <Showapp v-if="showflag"></Showapp>
  </div>
</template>
<script>
import api from "@/api";
import Banner from "./Banner";
import Showapp from "./Showapp.vue";
export default {
  data() {
    return {
      list: null,
      banners: null,
      showflag: false,
    };
  },
  async mounted() {
    this.list = await this.$request({
      url: api.listApi,
    });
    this.banners = await this.$request({
      url: api.bannerApi,
    });
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 40,
        slidesPerView: 4,
        observer: true,
        observeParents: true,
      });
    });
  },
  components: {
    Banner,
    Showapp,
    // List
  },
  methods: {
    back() {
      // 命令式跳转   go  back  forward   push  replace
      this.$router.back();
      // console.log(this.list);
    },
    forward() {
      this.$router.forward();
    },
    show(el) {
      let test = document.querySelector("#coming").getBoundingClientRect().top;
      if (test < 20) {
        this.showflag = true;
      } else {
        this.showflag = false;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.show, true);
  },
  deactivated() {
    window.removeEventListener("scroll", this.show, true);
  },
};
</script>
<style lang="scss" scoped>
#coming {
  display: flex;
  flex-direction: column;
  overflow: auto;
  .van-loading {
    text-align: center;
  }
  ul {
    li {
      padding: 12px 14px 12px 0;
      margin-left: 14px;
      height: 90px;
      position: relative;
    }
    .name {
      position: absolute;
      left: 74px;
      top: 14px;
      font-size: 17px;
      color: #333;
      font-weight: 700;
    }
    .twod {
      display: inline-block;
      width: 43px;
      height: 14px;
      img {
        width: 100%;
      }
    }
    .score {
      position: absolute;
      left: 74px;
      top: 48px;
      font-size: 13px;
      color: #666;
      span {
        color: #faaf00;
        font-size: 15px;
        font-weight: 600;
      }
    }
    .star {
      width: 202px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      position: absolute;
      left: 74px;
      top: 68px;
      font-size: 13px;
      color: #666;
    }
    .number {
      position: absolute;
      left: 74px;
      top: 88px;
      font-size: 13px;
      color: #666;
    }
    .ticket {
      display: inline-block;
      position: absolute;
      right: 14px;
      top: 50px;
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }
    .preticket {
      display: inline-block;
      position: absolute;
      right: 14px;
      top: 50px;
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #3c9fe6;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>

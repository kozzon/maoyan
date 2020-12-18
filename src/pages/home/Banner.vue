<template>
  <div class="banner">
    <p class="title" v-if="banners">最受好评电影</p>
    <div class="swiper-container" @touchmove.stop="move">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
          <img :src="item.pic" alt="" />
          <span class="wish-bg"></span>
          <span class="score">观众评分 {{ item.score }}</span>
          <p class="filmname">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api";
export default {
  data() {
    return {
      banners: null,
    };
  },
  async mounted() {
    this.banners = await this.$request({
      url: api.bannerApi,
    });
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 40,
        slidesPerView: 4,
        // touchMoveStopPropagation: true,
      });
    });
  },
  methods: {
    move(e){
     
    }
  },
};
</script>
<style lang="scss" scoped>
.banner {
  width: 351px;
  height: 180px;
  padding: 12px 15px;
  img {
    width: 85px;
    height: 115px;
  }
}
.score {
  display: inline-block;
  width: 85px;
  color: #faaf00;
  font-size: 11px;
  position: absolute;
  bottom: 18px;
  left: 4px;
  font-weight: 600;
}
.wish-bg {
  position: absolute;
  display: inline-block;
  width: 85px;
  height: 35px;
  bottom: 15px;
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
.title {
  font-size: 14px;
  margin-bottom: 12px;
}
.filmname {
  width: 85px;
  font-size: 13px;
}
</style>

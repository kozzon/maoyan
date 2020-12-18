<template>
  <div id="container">
    <div class="mask" v-if="showflag"></div>
    <div class="detail" v-if="showflag && $route.params.detail">
      <div class="poster">
        <img
          :src="$route.params.detail.pic"
          alt=""
          width="110px"
          height="150px"
        />
      </div>
      <div class="ddetail">
        <h1 class="moviename">{{ $route.params.detail.name }}</h1>
        <p class="englishname">{{ $route.params.detail.englishname }}</p>
        <div class="sp">
          <span class="score">{{ $route.params.detail.score }}</span>
          <span class="pinglun" v-if="$route.params.detail.ticket == true"
            >({{ $route.params.detail.pinglun }}万人评)</span
          >
          <span class="pinglun" v-else>人想看</span>
        </div>
        <p class="type">{{ $route.params.detail.type }}</p>
        <p class="time">{{ $route.params.detail.time }}</p>
        <p class="publictime">{{ $route.params.detail.publictime }}</p>
        <img
          class="right"
          src="https://p0.meituan.net/scarlett/c3645757d488524c4af43f8278ceb929372.png"
          alt=""
          width="10px"
          height="15px"
        />
      </div>
    </div>
    <van-sticky>
      <van-tabs v-model="active">
        <van-tab
          v-for="item in date"
          :key="item.id"
          :title="item.day"
        ></van-tab>
      </van-tabs>
      <Diqu @send = "get"></Diqu>
    </van-sticky>
    <Movieaddress></Movieaddress>
  </div>
</template>
<script>
import Movieaddress from "./Movieaddress";
import Diqu from "./diquchose"
export default {
  data() {
    return {
      list: null,
      active: 0,
      showflag: true,
      date: [
        {
          day: "今天11月10日",
          id: 1,
        },
        {
          day: "明天11月11日",
          id: 2,
        },
        {
          day: "后天11月12日",
          id: 3,
        },
      ],
    };
  },
  components: {
    Movieaddress,
    Diqu
  },
  methods:{
    get(val){
      this.showflag = val
    }
  }
};
</script>
<style lang="scss" scoped>
@import "Assets/style/resetvui.scss";
.mask {
  position: absolute;
  background-color: #333;
  z-index: -1;
  opacity: 0.9;
  width: 100%;
  height: 188px;
}
.detail {
  font-size: 12px;
  width: 100%;
  height: 150px;
  color: #fff;
  padding: 19px 30px 19px 15px;
  display: flex;
  .ddetail {
    width: 208px;
    position: relative;
    // border:1px solid
  }
  .moviename {
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 20px;
    font-weight: 900;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .englishname {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 200px;
    height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sp {
    position: absolute;
    left: 10px;
    top: 50px;
  }
  .score {
    font-size: 18px;
    color: #ffcc00;
  }
  .type {
    position: absolute;
    left: 10px;
    top: 80px;
  }
  .time {
    position: absolute;
    left: 10px;
    top: 102px;
  }
  .publictime {
    position: absolute;
    left: 10px;
    top: 124px;
  }
  .right {
    display: inline-block;
    position: absolute;
    right: -20px;
    top: 50%;
    margin-top: -7.5px;
  }
}
#content {
  font-size: 14px;
  color: #777;
  overflow: scroll;
  height: 480px;
}
</style>

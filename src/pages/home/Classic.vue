<template>
  <div id="classic" @scroll="show">
    <div class="classsic">
      <ul>
        <li v-for="(item, index) in hotList" :key="index">
          <img :src="item.img | movieSizeFormat" alt="" />
          <h1 class="name">
            {{ item.nm }}
          </h1>
          <span class="score"
            >{{ item.sc | decimalDigitsFilter }}<i>分</i></span
          >
          <p class="time">上线时间 {{ item.rt }}</p>
          <p class="star">{{ item.star }}</p>
          <p class="number">{{ item.showInfo }}</p>
        </li>
      </ul>
    </div>
    <Showapp v-if="showflag"></Showapp>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Showapp from "./Showapp.vue";
export default {
  data() {
    return {
      showflag: false,
    };
  },
  components: { Showapp },
  computed: {
    ...mapState("home", {
      hotList: (state) => state.hot,
    }),
  },
  methods: {
    ...mapActions("home", ["getHotData"]),
    show(el) {
      let test = document.querySelector("#classic").getBoundingClientRect().top;
      if (test < 20) {
        this.showflag = true;
      } else {
        this.showflag = false;
      }
    },
  },
  mounted() {
    this.getHotData();
  },
  activated(){
    window.addEventListener("scroll", this.show, true);
  },
  deactivated(){
    window.removeEventListener("scroll", this.show, true);
  },
  components: {
    Showapp,
  },
};
</script>
<style lang="scss" scoped>
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
  .score {
    position: absolute;
    right: 24px;
    top: 14px;
    color: #faaf00;
    font-size: 15px;
    i {
      font-size: 12px;
      color: #999;
    }
  }
  .time {
    position: absolute;
    left: 74px;
    top: 48px;
    font-size: 13px;
    color: #666;
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
}
</style>

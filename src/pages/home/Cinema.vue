<template>
  <div id="cinema" @scroll="show">
    <Diqu></Diqu>
    <Movieaddress></Movieaddress>
    <Showapp v-if="showflag"></Showapp>
  </div>
</template>
<script>
import Movieaddress from "../movie/Movieaddress.vue";
import Diqu from "../movie/diquchose.vue";
import Showapp from "./Showapp.vue";
export default {
  data() {
    return {
      showflag: false,
    };
  },
  components: {
    Diqu,
    Movieaddress,
    Showapp,
  },
  methods: {
    show(el) {
      let test = document.querySelector("#cinema").getBoundingClientRect().top;
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
#diqu {
  height: 44px;
  /deep/ .van-collapse {
    width: 100%;
    display: flex;
    position: fixed;
    // width: 33%;
    z-index: 90;
    /deep/ .van-collapse-item {
      position: relative;
    }
  }
}
</style>

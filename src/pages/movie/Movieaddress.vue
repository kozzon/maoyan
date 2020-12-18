<template>
  <div id="adress">
    <div>
      <van-loading size="24px" v-if="!address">加载中...</van-loading>
      <div id="address" v-for="(item, index) in address" :key="index">
        <h1 class="name">{{ item.name }}</h1>
        <span class="price">{{ item.price }} &nbsp;&nbsp;<i>元起</i></span>
        <p class="adddress">{{ item.address }}</p>
        <span class="distance">{{ item.distance }}</span>
        <div class="quanyi">
          <span v-if="item.tui" class="tui">退</span>
          <span v-if="item.gaiqian" class="gaiqian">改签</span>
          <span v-if="item.xiaochi" class="xiaochi">小吃</span>
          <span v-if="item.zhekouka" class="zhekouka">折扣卡</span>
          <span v-if="item.dubi" class="dubi">杜比全景声厅</span>
          <span v-if="item.DTS" class="DTS">DTS:X 临境音厅</span>
          <span></span>
        </div>
        <div class="ka">
          <img :src="item.img" alt="" width="15px" height="14px" />
          <span class="kaika">{{ item.kaika }}</span>
        </div>
        <div class="ttime">
          <span class="changci">{{ item.changci }}</span>
          <span class="time">{{ item.time }}</span>
        </div>
      </div>
      <!-- <van-loading size="24px" v-if="flag">加载中...</van-loading> -->
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Notify } from "vant";
BScroll.use(Pullup);
import api from "@/api";
export default {
  data() {
    return {
      address: null,
      flag: false,
      result: null,
    };
  },
  async mounted() {
    const {
      params: { id },
    } = this.$route;
    this.address = await this.$request({
      url: api.addressApi,
      // data: {
      //   cid: id,
      // },
    });
    // this.result = await this.$request({
    //   url: api.adddressApi,
    // });
    // console.log(this.result)
    this.$nextTick(() => {
      const bs = new BScroll(document.querySelector("#adress"), {
        click: true, // 允许点击了
        pullUpLoad: {
          threshold: 90,
        },
        probeType: 3,
        preventDefault: false,
      });
      // bsscroll是给我们提供了上拉加载事件的
      let count = 2;
      bs.on("pullingUp", async () => {
        // 发送数据请求
        // console.log("上啦");
        this.flag = true;
        if (count == 7) {
          Notify({ type: "warning", message: "拉到底了" });
          bs.finishPullUp();
          bs.refresh();
          return;
        }
        const result = await this.$request({
          url: api.adddressApi,
        });
        // console.log(result)
        this.address.push(...result);
        // console.log(this.address);
        bs.finishPullUp();
        bs.refresh(); // 重新计算页面盒子高度
        count++;
        this.flag = false;
        console.log(count);
      });
    });
  },
};
</script>
<style lang="scss" scoped>
// @import "Assets/style/resetvui.scss";
#adress {
  height: 1000px;
  width: 100%;
  overflow: hidden;
}
#address {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  height: 104px;
  // overflow: hidden;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
  .name {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
    position: absolute;
    left: 0;
    top: 10px;
  }
  .price {
    font-size: 18px;
    color: #f03d37;
    i {
      font-size: 12px;
    }
    position: absolute;
    left: 240px;
    top: 10px;
  }
  .adddress {
    width: 302px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
    color: #666;
    position: absolute;
    left: 0;
    top: 40px;
  }
  .distance {
    font-size: 13px;
    color: #666;
    position: absolute;
    right: 15px;
    top: 40px;
  }
  .quanyi {
    width: 100%;
    position: absolute;
    left: 0;
    top: 55px;
  }
  .tui {
    color: #589daf;
    border: 1px solid #589daf;
    font-size: 12px;
    padding: 0 3px;
  }
  .gaiqian,
  .dubi,
  .DTS {
    margin-left: 5px;
    color: #589daf;
    border: 1px solid #589daf;
    font-size: 12px;
    padding: 0 3px;
  }
  .xiaochi,
  .zhekouka {
    margin-left: 5px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 12px;
    padding: 0 3px;
  }
  .ka {
    position: absolute;
    left: 0;
    top: 82px;
    .kaika {
      font-size: 12px;
      color: #999;
    }
  }
  .ttime {
    position: absolute;
    left: 0;
    top: 108px;
    font-size: 12px;
    color: #999;
  }
}
.van-loading {
  text-align: center;
}
</style>

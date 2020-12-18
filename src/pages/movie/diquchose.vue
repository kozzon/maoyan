<template>
  <div id="diqu">
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item
        :title="chosecity || '全城'"
        @click.native="chose"
      >
        <div id="content" v-if="items">
          <van-tabs v-model="actived">
            <van-tab title="商区">
              <van-tree-select
                height="100%"
                :items="items"
                :main-active-index.sync="activated"
              >
                <template #content>
                  <div
                    class="list"
                    v-for="item in items[activated].children"
                    :key="item.id"
                    @click="choose"
                  >
                    <div class="diqucontent" @click="choose">
                      <span class="duigou" v-if="flag?flag:item.id==1"></span>
                      <span :class="{ text: true, chosen: item.id == 1 }">{{
                        item.text
                      }}</span>
                      <span :class="{ number: true, chosen: item.id == 1 }">{{
                        item.number
                      }}</span>
                    </div>
                  </div>
                </template>
              </van-tree-select>
            </van-tab>
            <van-tab title="地铁"></van-tab>
          </van-tabs>
        </div>
      </van-collapse-item>
    <van-collapse-item
      :title="'品牌'"
    >
    </van-collapse-item>
     <van-collapse-item
      :title="'特色'"
    >
    </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import api from "@/api";
export default {
  data() {
    return {
      actived: 0,
      activated: 1,
      activeNames: "",
      items: null,
      show: true,
      chosecity:null,
      flag:false,
    };
  },
  // computed:{
  //   chosecity(){
  //     return this.$store.state.chosecity
  //   }
  // },
  async mounted() {
    this.items = await this.$request({
      url: api.shangquApi,
    });
  },
  methods: {
    chose() {
      if (this.activeNames !== "") {
        this.show = false;
      } else  {
        this.show = true;
      }
      this.$emit("send", this.show);
    },
    choose(e) {
      // console.log(e);
      // console.log(this.items[this.activated].children);
      this.activeNames = "";
      this.chosecity = e.target.innerText
      // this.$store.commit('choose',e.target.innerText)
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .van-collapse {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
  /deep/ .van-collapse-item {
    position: null !important;
    width: 33%;
    display: inline-block;
    text-align: center;
    .van-collapse-item__wrapper {
      width: 100%;
      position: fixed;
      z-index: 99;
      left: 0px;
    }
  }
}
/deep/ .van-collapse-item__content {
  padding: 0 !important;
}
/deep/ .van-tree-select__content {
  background-color: #f5f5f5;
}
/deep/ .van-cell__title{
    // height: 24px;
    width: 72px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.diqucontent {
  background: #f5f5f5;
  font-size: 14px;
  color: #333;
  overflow: scroll;
  width: 235px;
  height: 45px;
  line-height: 45px;
  position: relative;
  .duigou {
    content: "";
    display: block;
    position: absolute;
    left: 21px;
    top: 19px;
    width: 11.5px;
    height: 8px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .text {
    // width: 100px;
    float: left;
    margin-left: 40px;
  }
  .chosen {
    color: #f03d37;
  }
  .number {
    font-size: 12px;
    float: right;
    padding: 0 15px 0 0;
  }
}
</style>

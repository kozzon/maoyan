<template>
  <div id="city">      
      <van-index-bar :index-list="indexList" :highlight-color="color">
        <van-index-anchor v-for="(item,index) in citytop"
        :key="'list1'+index" :index="item.index">
            <div class="">
              {{ item.title }}
            </div>
            <div class="content">
              <div
              class="button"
              v-for="(items,index) of item.lists"
              :key="'list2'+index"
              >
                {{ items }}
              </div>
            </div>
        </van-index-anchor>
        <van-index-anchor class="" v-for="(item,index) in cities"
        :key="'list3'+index" :index="item.title">
          <div class="">
            {{ item.title }}
          </div>
            <div
              class="list"
              v-for="(items,index) of item.lists"
              :key="'list4'+index"
              @click="chosecity"
            >
            {{ items }}
            </div>
        </van-index-anchor>
      </van-index-bar>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data(){
    return{
      color:'black',
      indexList:['定位','最近','热门','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','X','Y','Z'],
      cities:[],
      citytop:[],
      thiscity:''
    }
  },
  methods:{
    chosecity(e){
      this.thiscity = e.target.innerHTML
      this.$router.push('/home/hot')
      this.$route.meta.city = this.thiscity
    }
  },
  async mounted(){
    this.citytop = await this.$request({
      url: api.citytopApi
    })
    this.cities = await this.$request({
      url: api.cityApi
    })
  }
}
</script>

<style lang="scss" scoped>
  #city{
    // background: #ebebeb !important;
    font-size: 14px;
    color: #333;
    .content{
      // display: flex;
      // justify-content: space-around;
       .button{
        display: inline-block;
        width: 95px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        border: 1px solid #e6e6e6;
        margin: 10px 0 0 10px;
       }
    }
    
    .list{
      border-bottom: 1px solid #c8c7cc;
    }
  }
</style>
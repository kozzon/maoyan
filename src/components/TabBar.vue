<template>
  <div id="tab-bar">
     <ul>
       <router-link tag="li" active-class="active" :to="item.path" v-for="item in navs" :key="item.id">
          <van-icon :name="item.icon_name" />
          <span> {{ item.text }} </span>  
       </router-link>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navs: [
        {
          id: 1,
          icon_name: 'home-o',
          text: '首页',
          path: '/home'
        },
        {
          id: 2,
          icon_name: 'apps-o',
          text: '分类',
          path: '/category'
        },
        {
          id: 3,
          icon_name: 'refund-o',
          text: '活动',
          path: '/active'
        },
        {
          id: 4,
          icon_name: 'cart-circle-o',
          text: '购物车',
          path: '/car'
        },
        {
          id: 5,
          icon_name: 'friends-o',
          text: '我的',
          path: '/mine'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color.scss';
#tab-bar{
  width: 375px;
  height: 48px;
  border-top: 1px solid #ccc;
  ul{
    width: 100%;height: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      span{
        font-size: 12px;
        color: #696969;
      }
      &.active{
        i {
          color: $theme_color;
        }
        span {
          color: $theme_color;
        }
      }
    }
  }
}
</style>
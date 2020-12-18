<template>
  <div id="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜电影、电影院"
        @search="onSearch"
        @cancel="onCancel"
      >
      </van-search>
  </form> 
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
};
</script>
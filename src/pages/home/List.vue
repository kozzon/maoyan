<template>
  <div v-swipeleft="forward" v-swiperight="back" id="list">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutRight"
    >
      <keep-alive>
      <router-view>

      </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      // 命令式跳转   go  back  forward   push  replace
      this.$router.back();
      // console.log(this.$router);
    },
    forward() {
      this.$router.forward();
      // console.log(this.$router);
    },
  },
};
</script>

<style lang="scss" scoped>
#list {
  height: 100%;
}
</style>

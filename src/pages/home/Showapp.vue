<template>
  <div id="showapp" >
    <img
      src="http://p1.meituan.net/scarlett/87654d5e4e5e057206969c3abb8e09f33151.png"
      alt=""
    />
    <div>打开App</div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
#showapp {
  position: fixed;
  right: 0;
  bottom: 120px;
  width: 110px;
  height: 38px;
  line-height: 38px;
  z-index: 10;
  opacity: 0.94;
  background-image: linear-gradient(134deg, #fb3333, #ff5269 75%);
  box-shadow: 0 2px 4px 0 rgba(160, 44, 41, 0.15);
  border-radius: 20px 0 0 20px;
  img {
    width: 23px;
    position: absolute;
    left: 10px;
    top: 6px;
  }
  div {
    position: absolute;
    right: 10px;
    top: 1px;
    color: #fff;
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>

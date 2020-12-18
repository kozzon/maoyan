<template>
  <div id="container">
    <!-- <Download></Download>
    <Topbar></Topbar> -->
    <!-- <Content/> -->
    <!-- <Banner></Banner> -->
    <List></List>
  </div>
</template>

<script>
// import Download from "./Download"
// import Topbar from "./Topbar"
// import Content from "./Content"
// import Banner from "./Banner"
import List from "./List"
export default {
  components:{
    // City,
    // Download,
    // Topbar,
    List,
    // Banner,
  }
}
</script>

<style lang="scss" scoped>
  #container{
    overflow: auto;
  }
</style>
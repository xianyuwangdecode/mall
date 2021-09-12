<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="yellow">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcat" activeColor="red">
      <img slot="item-icon" src="../assets/img/tabbar/shopcat.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcat_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#fac">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from './tabbar/TabBar'
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>

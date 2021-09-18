<template>
  <div id="home">
    <!--导航栏-->

    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--选项卡-->
    <tab-control ref="tabControl1"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 class="tab-control"
                 v-show="isTabFixed"
    ></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">

      <!--轮播图-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!--四个选项卡-->
      <recommend-view :recommends="recommends"/>
      <!--本周流行-->
      <feature-view/>
      <!--选项卡-->
      <tab-control ref="tabControl2"
                   v-show="!isTabFixed"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <!--选项卡下的子项-->
      <goods-list :goods="showGoods" :isScrollBottom="isScrollBottom"></goods-list>

    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>

  </div>
</template>

<script>

import {getHomeMultiData, getHomeGoods} from "network/home";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

export default {
  name: "Home",
  components: {
    FeatureView,
    RecommendView,
    NavBar,
    HomeSwiper,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      isScrollBottom: false
    }
  },
  methods: {
    //网络请求相关的方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },
    //事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {

      //判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1300

      //决定TabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    //上拉加载更多
    loadMore() {
      this.isScrollBottom = true;
      this.$refs.scroll.scroll.refresh()


      setTimeout(() => {
        this.getHomeGoods(this.currentType)
        this.isScrollBottom = false
        this.$refs.scroll.scroll.refresh()
      }, 2000)

    },
    /*轮播图的图片加载完成后*/
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultiData()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  activated() {
    if (this.saveY < 0) {
      this.$refs.scroll.scrollTo(0, this.saveY)
    }
  }


}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;

}

.home_nav {
  background: var(--color-tint);
  color: #f6f6f6;
}

.content {
  height: calc(100% - 50px);
  overflow: hidden;
}

.tab-control {
  position: relative;
  z-index: 9;
}


</style>

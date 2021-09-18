<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    /*创建Scroll对象*/
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    /*监听滚动的位置*/
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }

    /*监听上拉事件*/
    if (this.pullUpLoad) {

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')

      })
    }

    /*监听下拉事件*/
  },
  methods: {
    /*回到顶部事件*/
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }

  }
}
</script>

<style scoped>

</style>

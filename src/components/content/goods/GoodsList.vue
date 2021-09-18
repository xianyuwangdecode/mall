<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
    <div  class="scroll-bottom" v-show="isScrollBottom">
      <load-animation></load-animation>
    </div>
  </div>
</template>

<script>

import GoodsListItem from "./GoodsListItem";
import LoadAnimation from "components/common/loadAnimation/LoadAnimation";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
    LoadAnimation

  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
    isScrollBottom: {
      type:Boolean,
      default() {
        return false;
      }
    }
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 2% 1% 1%;
  justify-content: space-around;
}

.scroll-bottom{
  margin-bottom: 10%;
}


</style>

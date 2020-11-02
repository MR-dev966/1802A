<template>
  <div class="container">
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="autoHeight"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :use-css-transforms="true"
      @layout-updated="layoutUpdatedEvent"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resized="resizedEvent"
      >
        <!-- <span class="text">{{ item.i }}</span> -->
        <component :is="item.component?item.component: 'span'" :size="item.size">{{item.i}}</component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
} from "@vue/composition-api";
// 引入子组件
import chart1 from './components/chart1'
import chart3 from './components/chart3'
import chart4 from './components/chart4'
import chart7 from './components/chart7'


export default defineComponent({
  name: "App",
  components: {
    GridLayout,
    GridItem,
    chart1,
    chart3,
    chart4,
    chart7
  },
  setup(props, {root}) {
    // 用reactive定义一个响应的复杂数据
    let layout = reactive([
      { x: 0, y: 0, w: 4, h: 8, i: "门店数据", component: 'chart1', size: ref(0) },
      { x: 4, y: 0, w: 4, h: 2, i: "标题", size: ref(0) },
      { x: 8, y: 0, w: 4, h: 10, i: "用户增长", size: ref(0) },
      { x: 0, y: 8, w: 4, h: 10, i: "书籍数据", component: 'chart3', size: ref(0) },
      { x: 4, y: 2, w: 4, h: 14, i: "全国门店分布", component: 'chart4', size: ref(0) },
      { x: 8, y: 10, w: 4, h: 10, i: "销售额数据", size: ref(0) },
      { x: 0, y: 18, w: 4, h: 12, i: "人流量数据", size: ref(0) },
      { x: 4, y: 16, w: 4, h: 14, i: "北京市门店分布", component: 'chart7', size: ref(0) },
      { x: 8, y: 20, w: 4, h: 10, i: "订单数据", size: ref(0) },
    ]);
    // 用ref定义一个响应的普通数据
    let autoHeight = ref(0);
    autoHeight.value = window.innerHeight / 60;

    // 布局改变事件
    function layoutUpdatedEvent(){
      // console.log('arguments...', arguments);
      layout.forEach(item=>{
        item.size.value = item.w+item.h;
      })
    }

    window.addEventListener('resize', layoutUpdatedEvent)

    function resizedEvent(){}

    return {
      layout,
      autoHeight,
      layoutUpdatedEvent,
      resizedEvent
    }
  }
});
</script>

<style lang="scss">
html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
.container{
  background: url('./assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.vue-grid-layout {
  // background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}
</style>

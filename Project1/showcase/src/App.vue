<template>
  <div class="container">
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="autoHeight"
      :is-draggable="true"
      :is-resizable="true"
      :responsive="true"
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
import chart2 from './components/chart2'
import chart3 from './components/chart3'
import chart4 from './components/chart4'
import chart5 from './components/chart5'
import chart6 from './components/chart6'
import chart7 from './components/chart7'
import chart8 from './components/chart8'


export default defineComponent({
  name: "App",
  components: {
    GridLayout,
    GridItem,
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    chart7,
    chart8
  },
  setup(props, {root}) {
    // 用reactive定义一个响应的复杂数据
    let layout = reactive([
      { x: 0, y: 0, w: 4, h: 10, i: "门店数据", component: 'chart1', size: ref(0) },
      { x: 4, y: 0, w: 4, h: 2, i: "智慧书店互动橱窗", size: ref(0) },
      { x: 8, y: 0, w: 4, h: 10, i: "用户增长", component: 'chart2', size: ref(0) },
      { x: 0, y: 10, w: 4, h: 10, i: "书籍数据", component: 'chart3', size: ref(0) },
      { x: 4, y: 2, w: 4, h: 14, i: "全国门店分布", component: 'chart4', size: ref(0) },
      { x: 8, y: 10, w: 4, h: 10, i: "销售额数据", component: 'chart5', size: ref(0) },
      { x: 0, y: 20, w: 4, h: 10, i: "人流量数据", component: 'chart6', size: ref(0) },
      { x: 4, y: 16, w: 4, h: 14, i: "北京市门店分布", component: 'chart7', size: ref(0) },
      { x: 8, y: 20, w: 4, h: 10, i: "订单数据", component: 'chart8', size: ref(0) },
    ]);
    // 用ref定义一个响应的普通数据
    let autoHeight = ref(0);
    autoHeight.value = window.innerHeight / 60;

    // 节流函数
    function throttle(func, delay=600){
      let start = +new Date
      return function(){
        let now = +new Date
        if(now - start > delay){
          func();
          start = now;
        }
      }
    }
    // 布局改变事件
    function layoutUpdatedEvent(){
      layout.forEach(item=>{
        item.size.value = item.w + item.h + window.innerWidth;
      })
      console.log('layout update');
    }

    let wrapUpdate = throttle(layoutUpdatedEvent);

    window.addEventListener('resize', wrapUpdate)

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
  // background: rgba(1,16,45, .5);
  border: 1px solid black;
}
</style>

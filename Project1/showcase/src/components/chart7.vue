<template>
  <v-chart :options="options" class="chart" ref="chart"></v-chart>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  watch,
  onMounted,
} from "@vue/composition-api";
import beijing from "../assets/beijing.js";
import ECharts from 'vue-echarts'

ECharts.registerMap('beijing', beijing);

export default defineComponent({
  props: ["size"],
  setup(props) {
    const chart = ref("");
    function randomData() {
      return Math.round(Math.random() * 500);
    }
    const mydata = [{
      name: '大兴区', value: randomData()
    },{
      name: '密云区', value: randomData()
    },{
      name: '门头沟区', value: randomData()
    },{
      name: '昌平区', value: randomData()
    },{
      name: '延庆区', value: randomData()
    }];

    let options = reactive({
      backgroundColor: "#FFFFFF",
      title: {
        text: "全国地图大数据",
        x: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: ({name, value})=>{
          return `${name}门店数量: ${value?value: 0}家`
        }
      },
      //左侧小导航图标
      visualMap: {
        show: true,
        x: "left",
        y: "center",
        splitList: [
          { start: 500, end: 600 },
          { start: 400, end: 500 },
          { start: 300, end: 400 },
          { start: 200, end: 300 },
          { start: 100, end: 200 },
          { start: 0, end: 100 },
        ],
        color: [
          "#5475f5",
          "#9feaa5",
          "#85daef",
          "#74e2ca",
          "#e6ac53",
          "#9fb5ea",
        ],
      },
      //配置属性
      series: [
        {
          name: "数据",
          type: "map",
          mapType: "beijing",
          roam: true,
          label: {
            normal: {
              show: true, //省份名称
            },
            emphasis: {
              show: false,
            },
          },
          data: mydata, //数据
        },
      ]
    });

    watch(props.size, () => {
      chart.value.resize();
    });

    onMounted(() => {
      setTimeout(() => {
        chart.value.resize();

      /** echart使用步骤
        1. 初始chart
        var echart = ECharts.init(document.getElementById('#root'));
        2. 配置option
        var option = {};
        3. 设置option
        echart.setOption(options);
      */
      }, 0);
    });

    return {
      options,
      chart,
    };
  },
});
</script>

<style lang="scss" scoped>
.echarts.chart {
  width: 100%;
  height: 100%;
}
</style>
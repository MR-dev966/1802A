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
export default defineComponent({
  props: ["size"],
  setup(props) {
    const chart = ref("");
    let options = reactive({
      title: {
        text: "书籍数据",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["门店书籍数量", "库存书籍数量"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "门店书籍数量",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "库存书籍数量",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310],
        }
      ],
    });

    watch(props.size, () => {
      chart.value.resize();
    });

    onMounted(() => {
      setTimeout(() => {
        chart.value.resize();
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
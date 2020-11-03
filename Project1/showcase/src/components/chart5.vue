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
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        feature: {
          // restore: {},
          // saveAsImage: {},
        },
      },
      series: [
        {
          name: "销售额数据",
          type: "gauge",
          detail: { formatter: "{value}%" },
          data: [{ value: 50, name: "一亿" }],
        },
      ],
    });

    watch(props.size, () => {
      chart.value.resize();
    });

    onMounted(() => {
      setTimeout(() => {
        chart.value.resize();
      
      }, 0);
      setInterval(()=>{
        // 修改指针
        let series = [...options.series];
        series[0].data[0].value = (Number(options.series[0].data[0].value) + 0.1).toFixed(2);
        options.series = series;
      }, 500);
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
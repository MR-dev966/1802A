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
    props: ['size'],
  setup(props) {
    console.log('props...', props);
    const chart = ref('');
    let options = reactive({
      title: { text: "门店数据" },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    });

    watch(props.size, ()=>{
      console.log('watch chart1')
        chart.value.resize();
    })

    onMounted(()=>{
        setTimeout(()=>{
            chart.value.resize();
        }, 0)
    })

    return {
      options,
      chart
    };
  }
});
</script>

<style lang="scss" scoped>
    .echarts.chart{
        width: 100%;
        height: 100%;
    }
</style>
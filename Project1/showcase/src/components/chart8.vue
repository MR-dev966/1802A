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

    const data = [
      {
        name: "北京校区",
        value: 8000,
        children: [
          {
            name: "北京网站",
            value: 600,
            children: [
              {
                name: "专业阶段",
                value: 300,
              },
              {
                name: "专高阶段",
                value: 200,
              },
              {
                name: "小实训",
                value: 110,
              },
              {
                name: "大实训",
                value: 200,
                children: [
                  {
                    name: "实训一",
                    value: 35,
                    children: [
                      {
                        name: "1802A",
                        value: 35,
                        children: [
                          {
                            name: "第一组",
                            value: 5,
                            children: [
                              {
                                name: "王艺霖",
                                value: 1,
                              },
                              {
                                name: "邓泽楠",
                                value: 1,
                              },
                              {
                                name: "李佳璇",
                                value: 1,
                              },
                              {
                                name: "闫鑫鑫",
                                value: 1,
                              },
                              {
                                name: "郭舒宇",
                                value: 1,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "实训二",
                    value: 60,
                  },
                ],
              },
            ],
          },
          {
            name: "北京传媒",
            value: 650,
          },
          {
            name: "北京大数据",
            value: 400,
          },
          {
            name: "北京云计算",
            value: 300,
          },
          {
            name: "高翻学院",
            value: 200,
          },
          {
            name: "国际经贸",
            value: 100,
          },
          {
            name: "建筑学院",
            value: 150,
          },
          {
            name: "网络营销",
            value: 300,
          },
          {
            name: "北京物联网",
            value: 300,
          },
          {
            name: "移动通信",
            value: 50,
          },
          {
            name: "软件工程",
            value: 200,
          },
          {
            name: "网络工程",
            value: 200,
          },
        ],
      },
      {
        name: "天津校区",
        value: 6000,
      },
      {
        name: "宿迁校区",
        value: 15000,
      },
      {
        name: "上海校区",
        value: 5000,
      },
    ];
    let options = reactive({
      title: {
        text: "智慧门店组织架构",
        subtext: "2020/11",
        left: "leafDepth",
      },
      tooltip: {},
      series: [
        {
          name: "学校概况",
          type: "treemap",
          // visibleMin: 300,
          data: data,
          leafDepth: 1,
          levels: [
            {
              itemStyle: {
                borderColor: "#555",
                borderWidth: 4,
                gapWidth: 4,
              },
            },
            {
              colorSaturation: [0.3, 0.6],
              itemStyle: {
                borderColorSaturation: 0.7,
                gapWidth: 2,
                borderWidth: 2,
              },
            },
            {
              colorSaturation: [0.3, 0.5],
              itemStyle: {
                borderColorSaturation: 0.6,
                gapWidth: 1,
              },
            },
            {
              colorSaturation: [0.3, 0.5],
            },
          ],
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
<template>
  <div>
    <input type="text" v-model="money" />
    <button @click="pay">支付</button>
  </div>
</template>

<script>
import {submitCart} from '../../api/index'
export default {
  data() {
    return {
      money: "",
    };
  },
  methods: {
    async pay() {
      let params = {
        openId: "oqWGS4vTpY11G9XBBEf4rP24vnkI",
        couponId: "",
        orderName: "张三",
        orderPhone: "17621526605",
        taskGoodsTime: +new Date,
        userId: "oqWGS4vTpY11G9XBBEf4rP24vnkI",
        orderPrice: this.money,
        orderGoodsAddVOS: [
          {
            goodsId: 7,
            goodsOrderCount: 3,
          },
          {
            goodsId: 9,
            goodsOrderCount: 1,
          }
        ]
      };
      let result = await submitCart(params)
      console.log('result...', result)
      wx.requestPayment({
        ...result.data,
        success: res => {},
        fail: () => {},
        complete: () => {}
      });
    },
  },
};
</script>
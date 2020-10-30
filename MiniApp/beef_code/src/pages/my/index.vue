<template>
  <div>
    <button
      v-if="!info.avatarUrl"
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
    >
      获取用户信息
    </button>
    <div v-else>
      <image :src="info.avatarUrl" mode="scaleToFill" lazy-load="false">
      </image>
      <span>{{ info.nickName }}</span>
    </div>
  </div>
</template>

<script>
import { updateUserInfo } from "../../api/index";

export default {
  data() {
    return {
      info: {},
    };
  },
  created() {
    let info = wx.getStorageSync("userInfo");
    if (info) {
      this.info = info;
    }
  },
  methods: {
    async getUserInfo(e) {
      console.log("e...", e);
      let info = e.target.rawData;
      if (info) {
        this.info = info = JSON.parse(info);
        wx.setStorageSync("userInfo", info);
        await updateUserInfo(info);
      } else {
        wx.showToast({
          title: "授权用户信息，提供更好的服务", //提示的内容,
          icon: "none", //图标,
        });
      }
    },
  },
};
</script>
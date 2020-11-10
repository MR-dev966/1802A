<template>
  <div id="nav">
    <p>
      <span v-for="(item, index) in categoryList" :key="index">{{item.name}}</span>
    </p>
  </div>
  <router-view />
</template>

<script>
import { getHomeList } from "@/api/index";
import { defineComponent, computed } from "vue";
import {useStore} from 'vuex'

export default defineComponent({
  setup(props, context) {
    let store = useStore();
    store.dispatch('home/getHomeList', {mid: 0});

    return {
      categoryList: computed(()=>store.state.home.rankCategoryList)
    }
  },
});
</script>
<style lang="scss">
// 配置rem
html {
  font-size: calc(100vw / 750 * 100);
}
body {
  font-size: 0.32rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

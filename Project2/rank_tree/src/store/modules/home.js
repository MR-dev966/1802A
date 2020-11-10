import {getHomeList} from '@/api/index'

const state = {
  rankCategoryList: []
}

const mutations = {
  updateCategoryList(state, payload){
    state.rankCategoryList = payload;
  }
}

const actions = {
  async getHomeList({commit}, payload){
    let result = await getHomeList(payload);
    commit("updateCategoryList", result.rankCategoryList);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

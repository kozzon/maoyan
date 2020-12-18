import { hotReq } from "@/service";
export default {
  namespaced: "home",
  state: {
    hot: [], // 热映数据
  },
  actions: {
    // 获取热映数据
    async getHotData({ commit }) {
      // type  'get_hot_data'
      commit({
        type: "get_hot_data",
        payload: await hotReq(),
        // payload: await request({
        //     url: api.hotApi,
        //     data: {
        //         token: '',
        //         optimus_uuid: 'A894438019C611EB875C6BA4A34E53D824D58CC33E6143CBBEF9C5952036A865',
        //         optimus_risk_level: 71,
        //         optimus_code: 10
        //     }
        // })
      });
    },
  },
  mutations: {
    get_hot_data(state, { payload }) {
      //数据修改在这里做
      // console.log('payload',payload)
      state.hot = payload.movieList;
    },
  },
};

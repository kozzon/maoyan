//1. 激活vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

//2. 创建store仓库
const store = new Vuex.Store({
    // 里面可以写的就是我们刚才讲的核心概念了
    state: {
        count: 0,
        chosecity:null
    },
    mutations: {
       // mutations方法中的名称就是actions发过来动作的type 
       add (state,payload) {
           console.log('mutations执行了')
            state.count += payload
       },
       choose(state,payload){
          state.chosecity = payload
       }
    },
})

//3. 导出store仓库，以供main.ts引用
export default store 
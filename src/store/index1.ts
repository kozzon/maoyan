//1. 激活vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

//2. 创建store仓库
const store = new Vuex.Store({
    // 里面可以写的就是我们刚才讲的核心概念了
    state: {
        count: 0
    },
    actions: {
        // 用于创建动作，发送动作
        increment ({commit},payload) {
            console.log('actions执行',payload)
            // 通过commit来发送动作 
            const action = {
                type: 'add',
                payload
            }
            commit(action)
        }
    },
    mutations: {
       // mutations方法中的名称就是actions发过来动作的type 
       add (state,action) {
           console.log('mutations执行了')
            state.count += action.payload
       }
    },
    getters: {
        n () {
            return store.state.count 
        } 
    }
})

//3. 导出store仓库，以供main.ts引用
export default store 
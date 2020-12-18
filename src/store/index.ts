import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import showflag from './showflag'
Vue.use(Vuex)

export default new Vuex.Store({
    // 通过modules来对项目做数据分块，也就是进行分门别类，比如home/car/todolist/user
    modules: {
        home,
        // showflag
    }
})
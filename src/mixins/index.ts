// 全局混入
import Vue from 'vue'
Vue.mixin({
    filters: {
        decimalDigitsFilter (v) {
            return v.toFixed(1)
        },
        movieSizeFormat (v) {
            return v.replace('w.h','64.90')
        }
    }
})
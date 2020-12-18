function touch (ele,eventName,callback) {
    const hammer = new Hammer(ele)
    hammer.on(eventName,callback)
}
// vue中自定义插件定义形式
const myPlguin  = {
    install (Vue) {
        Vue.directive('tap',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('swipeleft',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('swiperight',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('rotate',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('press',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('pinch',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
        Vue.directive('pan',{
            bind (el,binding) {
                touch(el,binding.name,binding.value)
            }
        })
    }
}

export default myPlguin
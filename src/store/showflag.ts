export default{
  namespaced:'showflag',
  state:{
    flag:false
  },
  actions:{
    show({commit}){
      commit({
        type:'change'
      })
    }
  },
  mutations:{
    change(state){
      let top = document.querySelector('#hot').getBoundingClientRect().top
      if(top < 20){
        state.flag = true
      }else{
        state.flag = false
      }
    }
  }
}
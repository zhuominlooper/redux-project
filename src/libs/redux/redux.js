
//自定义redux模块:对象
//主要是两个方法 createStore(reducer)和combineReducers(reducers)

//接收一个reducer函数，返回一个store对象
export function createStore(reducer){
    //定义一个保存n个listener的数组
    let listeners=[]
    let state
     state=reducer(state,{type:'@my-redux'})//初始化状态并保存
    function getState(){
        return state
    }
    function dispatch(action){
        //调用reducer，得到一个新的state，保存
          state=reducer(state,action)
        //调用listeners中的所有监视回调函数
        listeners.forEach(listener=>listener())
    }
    //订阅一个state的监视器
    function subscribe(listener){
        listeners.push(listener)
    }

  return {
    getState,dispatch,subscribe
  }
}

//接收多个reducer函数的对象，返回一个新的reduer函数
export function combineReducers(reducers){//reducers是一个对象，{test:test()} 
  return function(state={},action){
    debugger
         const newState={}
    const keys=Object.keys(reducers)
    keys.forEach(key=>{
      const childReducer=reducers[key]
      const childState=state[key]
      const newChildState=childReducer(childState,action)
      newState[key]=newChildState
    }) 
       return  newState 

  }

}



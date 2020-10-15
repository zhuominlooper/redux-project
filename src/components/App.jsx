import React from 'react';
import { Button } from 'antd-mobile';
import {  add,decrease} from "../redux/actions";
class App extends React.Component {
  add=()=>{
    this.props.store.dispatch(add(1)) 
  }
  decrease=()=>{
    this.props.store.dispatch(decrease(1)) 
   
  }
  render(){
   const countReducer=this.props.store.getState().countReducer
 console.log(111,countReducer)
    return (
      <div>
        <Button  type="primary">ANTD自定义主题</Button>
        <h2>实现计数器:</h2>
        <br/>
    <div>当前的数据是:{countReducer}</div>
    <br/>
    <br/>
    <Button  type="primary" onClick={this.add}>添加</Button>
    <br/>
    <Button  type="warning" onClick={this.decrease}>减少</Button>
    </div>
    );
  }

  
}

export default App;

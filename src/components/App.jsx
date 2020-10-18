import React from 'react';
import { Button } from 'antd-mobile';
import {  add,decrease} from "../redux/actions";
class App extends React.Component {
  add=()=>{
    this.props.add(1)
  }
  decrease=()=>{
    this.props.decrease(1)
   
  }
  render(){
   const {countReducer}=this.props.data
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

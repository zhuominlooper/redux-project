import React from "react";
import PropTypes from "prop-types";
//实现react-redux库

//provider组件类,为所有的组件提供一个store
export class Provider extends React.Component {
 
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    //声明向子组件提供哪些属性
    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

     getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        //this.props.children:代表provider下的所有子标签
        return this.props.children
    }

}


export function connect(mapStateToProps, mapDispatchToProps) {

    //返回一个函数，接收一个组件
    return function (WarpComponent) {

        return class ConnectComponent extends React.Component {            
            static contextTypes = {
                store: PropTypes.object.isRequired
            }
            
            constructor(propos,context){
                super(propos,context)
               //得到store
               const store=context.store
                //得到包含一般属性的对象
                const stateProps=mapStateToProps(store.getState())
                //得到包含函数属性的对象
                 this.dispatchProps=this.bindActionCreators(mapDispatchToProps)

                 //将一般属性的对象放在state
                 this.state={...stateProps}

            }
            //根据mapDispatchToProps返回一个分发action的函数对象
            bindActionCreators=(mapDispatchToProps)=>{
               return  Object.keys(mapDispatchToProps).reduce((dispatchToProp,key)=>{
                    dispatchToProp[key]=(...args)=>{
                        this.context.store.dispatch(mapDispatchToProps[key](...args))
                    }
                    return dispatchToProp
                 },{})

            }
            componentDidMount(){
                //监听state的改变
                const store=this.context.store
                store.subscribe(()=>{
                       this.setState(mapStateToProps(store.getState())) 
                })
            }
            render() {
                return <WarpComponent {...this.state} {...this.dispatchProps}/>
            }
        }
    }
}
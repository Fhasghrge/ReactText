import React from 'react'
import {createStore} from 'redux'
import './login.css'

const reducer = function(state= {num: 0}, action) {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case 'add':
      state.num ++;
      break;
    case 'decrement': 
      state.num--;
      break;
    default:
      break;
  }
  return {...state}
}
const store = createStore(reducer)
export default class Login extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state= {
      num:0
    }
  }
  login= () => {
    // 登录，
    store.dispatch({type: 'add'})
    let num = store.getState()
    this.setState({num: num.num})
  }
  signIn= () => {
    // 注册 
    store.dispatch({type: 'decrement'})
    let num  = store.getState()
    this.setState({num: num.num})
  }
  render() {
    return (
      <div id="login">
        <div className="inputs">
          <label htmlFor="username">用户名</label>
          <input type="text" name="用户名" id="username"/>
          <label htmlFor="passwd">密码</label>
          <input type="password" name="passwd" id="passwd"/>
        </div>
        <div id="btns">
          <h3>{this.state.num}</h3> 
          <button onClick={this.login}>登录</button>
          <button onClick={this.signIn}>注册</button>
        </div>
      </div>
    )
  }
}
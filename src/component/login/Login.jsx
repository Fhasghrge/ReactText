import React from 'react'
import './login.css'
export default class Login extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
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
      </div>
    )
  }
}
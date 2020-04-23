import React from 'react';
import './login.css';

export default class Login extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        name: '',
        passwd: '',
      }
    };
  }
  login = () => {};
  signIn = () => {};
  render() {
    return (
      <div id="login">
        <div id="login-main">
          <div className="inputs">
            <div className="inpt">
              <label htmlFor="username">用户名</label>
              <input type="text" name="用户名" id="username" />
            </div>
            <div className="inpt">
              <label htmlFor="passwd">密码</label>
              <input type="password" name="passwd" id="passwd" />
            </div>
          </div>
          <div id="btns">
            <button onClick={this.login}>登录</button>
            <button onClick={this.signIn}>注册</button>
          </div>
        </div>
      </div>
    );
  }
}

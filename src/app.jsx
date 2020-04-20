import React from 'react'
import './style/app.css'
import 'animate.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Manage from './component/manage/Manage'
import Login from './component/login/Login'

export default class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      info: {
        imgUrl: '',
        name: 'shuang'
      },
      isLogin: false,
    }
  }
  componentWillMount() {
    // this.props.history.replace("/login",{msg:"这是由ChildCom组件发给首页的数据"})
    console.log(this.props)
  }
  render() {
    if(this.state.isLogin) {
      return <Manage></Manage>
    }else {
      return <Login></Login>
    }
  }
}
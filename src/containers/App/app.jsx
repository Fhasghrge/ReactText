import React from 'react'
// import Silder from '../silder/Silder'
import Manage from '../manage/Manage'
// import Main from '../main/Main';
// import './app.css'
export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {

  }
  render() {
    return (
      <div id="app">
        {/* <Silder></Silder> */}
        {/* <Main></Main> */}
        <Manage></Manage>
      </div>
    )
  }
}
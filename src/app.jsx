import React from 'react'
import './style/app.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Self from './component/self/Self'
import Fe from './component/fe/Fe'
import Be from './component/be/Be'
import Alg from './component/alg/Alg'
import Others from './component/others/Others'
import Autor from './containers/Autor/Autor'


export default class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      info: {
        imgUrl: '',
        name: 'shuang'
      }
    }
  }
  render() {
    return (
      <div id='app'>
        <Router>
          <nav>
            <Autor info={this.state.info}/>
            <Link to='/self'>个人中心</Link>
            <Link to='/fe'>前端</Link>
            <Link to='/be'>后端</Link>
            <Link to='/alg'>算法</Link>
            <Link to='/others'>其他</Link>
          </nav>
          <main>
            <Route path='/self' component={Self}></Route>
            <Route path='/fe' component={Fe}></Route>
            <Route path='/be' component={Be}></Route>
            <Route path='/alg' component={Alg}></Route>
            <Route path='/others' component={Others}></Route>
          </main>
        </Router>
      </div>
    )
  }
}
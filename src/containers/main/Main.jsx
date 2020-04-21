import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Alg from '../../component/alg/Alg';
import Self from '../../component/self/Self';
import Others from '../../component/others/Others';
import Be from '../../component/be/Be';
import Fe from '../../component/fe/Fe';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="main">
        <Router>
          <Route path="/self" component={Self}></Route>
          <Route path="/fe" component={Fe}></Route>
          <Route path="/be" component={Be}></Route>
          <Route path="/alg" component={Alg}></Route>
          <Route path="/others" component={Others}></Route>
        </Router>
      </div>
    );
  }
}

export default Main;

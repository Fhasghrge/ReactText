import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Autor from '../../component/Autor/Autor';
import './silder.css'

export default class Silder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div id="silder">
        <Router>
          <Autor/>
          <Link to="/self">个人中心</Link>
          <Link to="/fe">前端</Link>
          <Link to="/be">后端</Link>
          <Link to="/alg">算法</Link>
          <Link to="/others">其他</Link>
        </Router>
      </div>
    );
  }
}

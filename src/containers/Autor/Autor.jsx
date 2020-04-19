import React from 'react'
import head_img from '../../image/avatar.jpg'
import './autor.less'
export default class Autor extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="autor">
        <img src={head_img} alt={this.props.info.name}/>
        <div id='autor_name'>{this.props.info.name}</div>
      </div>
    )
  }
}
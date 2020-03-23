import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            c1: 'content active',
            c2: 'content'
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(e) {
        let index = e.target.dataset.index
        if (index === '1') {
            this.setState({
                c1: 'content active'
            })
            this.setState({
                c2: "content"
            })
        } else {
            this.setState({
                c1: 'content',
                c2: "content active"
            })
        }
    }

    render() {
        return (
            <div>
                <button data-index='1' onClick={this.clickEvent}>content 1</button>
                <button data-index='2' onClick={this.clickEvent}>content 2</button>
                <div className={this.state.c1}>
                    <h1>main 1</h1>
                </div>
                <div className={this.state.c2}>
                    <h1>main 2</h1>
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <Tab />,
    document.querySelector('#root')
)
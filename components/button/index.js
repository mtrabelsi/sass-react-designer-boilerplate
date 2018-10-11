import React from 'react'
import './../../sass/test.scss'

class Home extends React.Component {
	constructor(props) {
       super(props)
       this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log('button clicked')
    }
	render() {
      return (<button onClick={this.handleClick}>
                {this.props.label ? this.props.label : 'default label'}
            </button>)
	}

}

export default Home

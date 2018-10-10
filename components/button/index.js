import React from 'react'

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
                <style jsx>{`
                    background-color: green;
                    color: white;
                    padding: 10px;
			    `}</style>
            </button>)
	}

}

export default Home
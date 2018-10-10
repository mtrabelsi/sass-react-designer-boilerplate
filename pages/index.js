import React from 'react'
import Button from './../components/button'

class Home extends React.Component {
	constructor(props) {
	   super(props)
	}
	render() {
	  return (<div>this is the home page
			<Button />
			<style jsx>{`
				display: flex;
				justify-content: center;
				padding: 50px;
			`}</style>
		</div>)
	}


}

export default Home

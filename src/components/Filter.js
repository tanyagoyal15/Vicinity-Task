import React , {Component} from 'react'

export default class Filter extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
            		<input onChange={(e) => this.props.handleInput(e)}/>		
				</div>
			</div>
		)
	}
}
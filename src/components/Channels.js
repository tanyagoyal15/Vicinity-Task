import React , {Component} from 'react'

export default class Channels extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
			  <select value={this.props.value} onChange={(e) => this.props.handleChange(e)} >
		  			<option value="">Select Channel</option>
			  	{this.props.channels.map((channel) => {
			  		return <option value={channel.id}>{channel.name}</option>
			  	})}
			  </select>
			    <input type="submit" value="Submit" onClick={(e) => this.props.handleClick(e)}/>
				</div>
			</div>
		)
	}
}
import React , {Component} from 'react'

export default class Channels extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<label>
			          Select City:
			          <select value={this.props.channel} onChange={(e) => this.props.handleChange(e)}>
			            <option value="" disabled>Select Channel</option>
			            <option value="business">Business</option>
						<option value="entertainment">Entertainment</option>
						<option value="general">General</option>
						<option value="health">Health</option>
						<option value="science">Science</option>
						<option value="sports">Sports</option>
						<option value="technology">Technology</option>
			          </select>
			            <input type="submit" value="Submit" onClick={(e) => this.props.handleSubmit(e)}/>
			        </label>
				</div>
			</div>
		)
	}
}
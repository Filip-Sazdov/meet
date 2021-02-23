import React, { Component } from "react";

class NumberOfEvents extends Component {
	state = {
		NumOfEvents: 32,
	};

	handleInputChange = (event) => {
		this.setState({
			NumOfEvents: event.target.value,
		});
	};

	render() {
		return (
			<div className="number-of-events">
				<h3>Number of Events:</h3>
				<input
					type="number"
					className="input-number"
					value={this.state.NumOfEvents}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;

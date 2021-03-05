import React, { Component } from "react";

class NumberOfEvents extends Component {
	state = {
		eventCount: this.props.eventCount,
	};

	handleInputChange = (event) => {
		const eventCount = event.target.value;
		this.setState({
			eventCount,
		});
		this.props.updateEvents("", eventCount);
	};

	render() {
		return (
			<div className="number-of-events">
				<h3>Number of Events:</h3>
				<input type="number" className="input-number" value={this.state.eventCount} onChange={this.handleInputChange} />
			</div>
		);
	}
}

export default NumberOfEvents;

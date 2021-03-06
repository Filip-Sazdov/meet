import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
	state = {
		eventCount: this.props.eventCount,
	};

	handleInputChange = (event) => {
		const eventCount = event.target.value;

		if (eventCount < 1) {
			return this.setState({
				eventCount: "",
				errorText: "Invalid input. Please select number between 1 and 32",
			});
		} else if (eventCount > 32) {
			return this.setState({
				eventCount: "",
				errorText: "Invalid input. Please select number between 1 and 32",
			});
		} else {
			this.setState({
				eventCount,
				errorText: "",
			});
			this.props.updateEvents("", eventCount);
		}
	};

	render() {
		return (
			<div className="number-of-events">
				<h3>Number of Events:</h3>
				<input type="number" className="input-number" value={this.state.eventCount} onChange={this.handleInputChange} />
				<ErrorAlert text={this.state.errorText} />
			</div>
		);
	}
}

export default NumberOfEvents;

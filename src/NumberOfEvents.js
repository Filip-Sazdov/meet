import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
	state = {
		eventCount: this.props.eventCount,
	};

	handleInputChange = (event) => {
		const eventCount = event.target.value;

		this.setState({
			eventCount,
		});
		this.props.updateEventCount(eventCount);
		this.props.updateEvents();

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
		}
	};

	render() {
		return (
			<div className="number-of-events">
				<div className="number-input">
					<p>Number of Events:</p>
					<input type="number" id="input-number" value={this.state.eventCount} onChange={this.handleInputChange} />
				</div>
				<ErrorAlert text={this.state.errorText} />
			</div>
		);
	}
}

export default NumberOfEvents;

import React, { Component } from "react";
import Modal from "./Modal";

class Event extends Component {
	state = {
		toggleDetails: false,
	};

	handleToggleDetails = () => {
		this.setState({ toggleDetails: !this.state.toggleDetails });
	};

	formatDateTime = (dateTime) => {
		return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(dateTime);
	};

	render() {
		const { event } = this.props;
		const dateTime = new Date(event.start.dateTime);
		const readableDateTime = this.formatDateTime(dateTime);

		return (
			<div className="event">
				<h3 className="event-title">{event.summary}</h3>
				<p className="event-start">{readableDateTime}</p>
				<p className="event-location">Location: {event.location}</p>
				<button className="toggle-details" onClick={() => this.handleToggleDetails()}>
					{!this.state.toggleDetails ? "Show Details" : "Hide Details"}
				</button>

				{this.state.toggleDetails && (
					<Modal event={{ ...event, readableDateTime }} handleToggleDetails={this.handleToggleDetails} />
				)}
			</div>
		);
	}
}

export default Event;

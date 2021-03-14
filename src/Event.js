import React, { Component } from "react";
import Modal from "./Modal";

import { MapPin } from "react-feather";

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
				<div className="event-text-section">
					<h4 className="event-title">{event.summary}</h4>
					<p className="event-start">{readableDateTime}</p>
					<div className="location-container">
						<MapPin style={{ color: "rgb(216, 213, 213)" }} /> <p className="event-location">{event.location}</p>
					</div>
				</div>
				<hr style={{ border: "0.5px solid #30333A", borderRadius: "5px", width: "90%", margin: 0 }} />
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

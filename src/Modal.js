import React, { Component } from "react";

import { MapPin } from "react-feather";

export default class Modal extends Component {
	render() {
		return (
			<div
				className="event-details"
				onClick={(e) => e.target.classList.contains("event-details") && this.props.handleToggleDetails()}
			>
				<div className="modal-content-container">
					<button className={"modal-exit-button"} onClick={() => this.props.handleToggleDetails()}>
						X
					</button>
					<div className="modal-event-text-section">
						<h2 className="modal-event-title">{this.props.event.summary}</h2>
						<p className="modal-event-start">{this.props.event.readableDateTime}</p>
						<div className="modal-location-container">
							<MapPin style={{ color: "rgb(216, 213, 213)" }} />
							<p className="modal-event-location">{this.props.event.location}</p>
						</div>
					</div>

					<p className="modal-event-description">{this.props.event.description}</p>
					<a className="modal-event-link" href={this.props.event.htmlLink}>
						See Details on Google Calendar
					</a>
				</div>
			</div>
		);
	}
}

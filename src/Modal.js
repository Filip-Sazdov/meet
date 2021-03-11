import React, { Component } from "react";

export default class Modal extends Component {
	render() {
		return (
			<div className="event-details" onClick={this.props.handleToggleDetails}>
				<div className="modal-content-container">
					<h3 className="modal-event-title">{this.props.event.summary}</h3>
					<p className="modal-event-start">{this.props.readabledateTime}</p>
					<p className="modal-event-location">Location: {this.props.event.location}</p>
					<a className="modal-event-link" href={this.props.event.htmlLink}>
						See Details on Google Calendar
					</a>
					<p className="modal-event-description">{this.props.event.description}</p>
				</div>
			</div>
		);
	}
}

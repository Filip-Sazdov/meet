import React, { Component } from "react";

class Event extends Component {
	state = {
		toggleDetails: false,
	};

	handleToggleDetails = () => {
		this.setState({ toggleDetails: !this.state.toggleDetails });
	};

	render() {
		const { event } = this.props;
		return (
			<div className="event">
				{/* Added clarifying text below as project brief visual seemed to need it. */}
				<h1>{event.summary}</h1>
				<h3>Start Time: {event.start.dateTime}</h3>
				<h3>Location: {event.location}</h3>
				{this.state.toggleDetails && (
					<div className="event-details">
						<h2>About event:</h2>
						<a href={event.htmlLink}>See Details on Google Calendar</a>
						<p>{event.description}</p>
					</div>
				)}
				<button className="toggle-details" onClick={() => this.handleToggleDetails()}>
					Details
				</button>
			</div>
		);
	}
}

export default Event;

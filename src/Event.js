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
				<h1 className="event-title">{event.summary}</h1>
				<p className="event-start">Start Time: {event.start.dateTime}</p>
				<p className="event-location">Location: {event.location}</p>
				<button className="toggle-details" onClick={() => this.handleToggleDetails()}>
					{!this.state.toggleDetails ? "Show Details" : "Hide Details"}
				</button>
				{this.state.toggleDetails && (
					<div className="event-details">
						{/* <h2 className=''>About event:</h2> */}
						<a href={event.htmlLink}>See Details on Google Calendar</a>
						<p>{event.description}</p>
					</div>
				)}
			</div>
		);
	}
}

export default Event;

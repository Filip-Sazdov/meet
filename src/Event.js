import React, { Component } from "react";

class Event extends Component {
	state = {
		toggleDetails: false,
	};

	handleToggleDetails = () => {
		this.setState({ toggleDetails: !this.state.toggleDetails });
	};

	formatDateTime = (dateTime) => {
		return new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "long" }).format(dateTime);
	};

	render() {
		const { event } = this.props;
		const dateTime = new Date(event.start.dateTime);
		const readabledateTime = this.formatDateTime(dateTime);

		return (
			<div className="event">
				{/* Added clarifying text below as project brief visual seemed to need it. */}
				<h3 className="event-title">{event.summary}</h3>
				<p className="event-start">{readabledateTime}</p>
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

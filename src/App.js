import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

class App extends Component {
	state = {
		events: [],
		locations: [],
		eventCount: 32,
	};
	updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			const locationEvents =
				location === "all"
					? events.slice(0, eventCount)
					: events.filter((event) => event.location === location).slice(0, eventCount);

			this.setState({
				events: locationEvents,
				eventCount,
			});
		});
	};
	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events.slice(0, this.state.eventCount),
					locations: extractLocations(events),
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<div className="App">
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
					eventCount={this.state.eventCount}
				/>
				<NumberOfEvents eventCount={this.state.eventCount} updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;

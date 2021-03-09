import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { WarningAlert } from "./Alert";

class App extends Component {
	state = {
		events: [],
		locations: [],
		eventCount: 32,
		location: "all",
		warningText: "",
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

	updateEventCount = (eventCount) => {
		this.setState({ eventCount });
	};

	updateLocation = (location) => {
		this.setState({ location });
	};

	updateEvents = () => {
		if (!navigator.onLine) {
			this.setState({
				warningText: "It seems you are offline!!! You are currently viewing a cached version of the events!!! ",
			});
		}

		getEvents().then((events) => {
			const { location, eventCount } = this.state;
			const locationEvents =
				location === "all"
					? events.slice(0, eventCount)
					: events.filter((event) => event.location === location).slice(0, eventCount);

			this.setState({
				events: locationEvents,
			});
		});
	};

	render() {
		return (
			<div className="App">
				<WarningAlert text={this.state.warningText} />

				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
					eventCount={this.state.eventCount}
					updateLocation={this.updateLocation}
				/>
				<NumberOfEvents
					eventCount={this.state.eventCount}
					updateEvents={this.updateEvents}
					updateEventCount={this.updateEventCount}
				/>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;

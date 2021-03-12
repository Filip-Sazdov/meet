import React, { Component } from "react";

import "./App.css";

import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";

import { getEvents, extractLocations } from "./api";
import { WarningAlert } from "./Alert";

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
		} else {
			this.setState({
				warningText: "",
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

	getData = () => {
		const { locations, events } = this.state;
		const data = locations.map((location) => {
			const number = events.filter((event) => event.location === location).length;
			const city = location.split(", ").shift();
			return { city, number };
		});
		return data;
	};

	render() {
		return (
			<div className="App">
				<WarningAlert text={this.state.warningText} />
				<h1>Meet App</h1>
				<h4>Choose your nearest city</h4>
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
				<h4>Events in each city</h4>

				<ResponsiveContainer height={400}>
					<ScatterChart
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20,
						}}
					>
						<CartesianGrid />
						<XAxis type="category" dataKey="city" name="city" />
						<YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
						<Tooltip cursor={{ strokeDasharray: "3 3" }} />
						<Scatter data={this.getData()} fill="#8884d8" />
					</ScatterChart>
				</ResponsiveContainer>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;

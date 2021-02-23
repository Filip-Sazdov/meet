import React from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";

const App = () => {
	return (
		<div className="App">
			<CitySearch />
			<NumberOfEvents />
			<EventList />
		</div>
	);
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <EventList />
//       </div>
//     );
//   }
// }

export default App;

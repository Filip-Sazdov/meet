import React from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";

const App = () => {
	return (
		<div className="App">
			<CitySearch />
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

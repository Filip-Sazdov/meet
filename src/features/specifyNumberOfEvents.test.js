import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
	let AppWrapper;
	let NumberOfEventsWrapper;

	test("When user hasn’t specified a number, 32 is the default number", ({ given, when, then }) => {
		given("the user hasn’t clicked on an event", () => {});

		when("the app is initially loaded", () => {
			AppWrapper = mount(<App />);
			NumberOfEventsWrapper = mount(<NumberOfEvents eventCount={32} />);
		});

		then("the user will see a list of 32 events by default.", () => {
			expect(NumberOfEventsWrapper.state("eventCount")).toBe(32);
		});
	});

	test("User can change the number of events they want to see", ({ given, when, then }) => {
		given("the main page view is open", () => {
			AppWrapper = mount(<App />);
		});

		when("the user selects a number-of-events-visible-dropdown", () => {
			const eventCount = {
				target: { value: 2 },
			};
			AppWrapper.find(".input-number").simulate("change", eventCount);
		});

		then("the user is presented with options to choose between the default 32, and 16, 64, 128.", () => {
			NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
			NumberOfEventsWrapper.setState({ eventCount: 0 });
			expect(NumberOfEventsWrapper.state("eventCount")).toBe(0);
		});
	});
});

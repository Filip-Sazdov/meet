import React from "react";
import App from "../App";

import { mount } from "enzyme";
import { mockData } from "../mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
	let AppWrapper;

	test("An event element is collapsed by default", ({ given, when, then }) => {
		given("the user hasn’t clicked on an event", () => {});

		when("the app is initially loaded", () => {
			AppWrapper = mount(<App />);
		});

		then(
			"the user should not be able to see details for individual events, rather, they should see all events by default i.e. main page view.",
			() => {
				expect(AppWrapper.find(".event-details")).toHaveLength(0);
			}
		);
	});

	test("User can expand an event to see its details", ({ given, when, then }) => {
		given("the main page view is open", () => {
			AppWrapper = mount(<App />);
		});

		when("the user selects an event", () => {
			AppWrapper.update();
			AppWrapper.find(".event .toggle-details").at(0).simulate("click");
		});

		then("the event details view should be visible.", () => {
			expect(AppWrapper.find(".event div.event-details")).toHaveLength(1);
		});
	});

	test("User can collapse an event to hide its details", ({ given, when, then }) => {
		given("the event details view is visible", () => {
			AppWrapper = mount(<App />);
		});

		when("the user selects an exit button/option", () => {
			AppWrapper.update();
			expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
			AppWrapper.find(".event .toggle-details").at(0).simulate("click");
			expect(AppWrapper.find(".event .event-details")).toHaveLength(1);

			AppWrapper.find(".event .toggle-details").at(0).simulate("click");
		});

		then("the event details view should direct to the main page view", () => {
			expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
		});
	});
});

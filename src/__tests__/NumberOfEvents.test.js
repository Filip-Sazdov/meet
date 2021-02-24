import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents />);
	});

	test("should render number of events input", () => {
		expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
	});

	test("should confirm default input value is 32", () => {
		expect(NumberOfEventsWrapper.find(".input-number").at(0).props().value).toEqual(32);
	});

	test("should render number of events", () => {
		const NumOfEvents = { target: { value: 8 } };

		NumberOfEventsWrapper.find(".input-number").simulate("change", NumOfEvents);
		expect(NumberOfEventsWrapper.state("NumOfEvents")).toBe(8);
	});
});

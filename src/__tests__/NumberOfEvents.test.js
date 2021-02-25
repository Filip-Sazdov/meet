import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
	});

	test("should render number of events input", () => {
		expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
	});

	test("should confirm default input value is undefined", () => {
		expect(NumberOfEventsWrapper.find(".input-number").at(0).props().value).toEqual(undefined);
	});

	test("should make sure state changes", () => {
		const eventCount = { target: { value: 8 } };

		NumberOfEventsWrapper.find(".input-number").simulate("change", eventCount);
		expect(NumberOfEventsWrapper.state("eventCount")).toBe(8);
	});
});

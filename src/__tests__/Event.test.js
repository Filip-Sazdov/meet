import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event/> component", () => {
	let mockEvent = mockData[0];

	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockEvent} />);
	});

	test("should render event", () => {
		expect(EventWrapper.find(".event")).toHaveLength(1);
	});
	test("should render show details", () => {
		EventWrapper.setState({ toggleDetails: true });
		EventWrapper.find(".toggle-details").simulate("click");
	});
	test("should render hide details", () => {
		EventWrapper.setState({ toggleDetails: false });
		EventWrapper.find(".toggle-details").simulate("click");
	});
});

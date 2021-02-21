// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; // Line in exercise text has Adapter in curly braces which creates an error. Removed curly braces.

configure({ adapter: new Adapter() });

// Found alternate way of importing enzyme which shows Adapter without curly braces.
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

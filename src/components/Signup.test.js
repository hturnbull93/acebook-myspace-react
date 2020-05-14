// using enzyme
import React from "react";
import { shallow } from "enzyme";

import Signup from "./Signup.js";
import SignupForm from "./SignupForm.js";

it("renders without crashing", () => {
  shallow(<Signup />);
});

it("has h1 with Sign up in it (enzyme)", () => {
  const wrapper = shallow(<Signup />);
  const title = <h1>Sign up</h1>;
  expect(wrapper).toContainReact(title);
});

it("has a SignupForm component in it", () => {
  const wrapper = shallow(<Signup />);
  expect(wrapper.find(SignupForm)).toHaveLength(1);
});

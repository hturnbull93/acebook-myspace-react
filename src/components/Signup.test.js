// using enzyme
import React from 'react';
import { shallow } from "enzyme";

import Signup from './Signup.js';

it("renders without crashing", () => {
  shallow(<Signup />);
});

it("has h1 with Sign up in it (enzyme)", () => {
  const wrapper = shallow(<Signup />);
  const title = <h1>Sign up</h1>;
  expect(wrapper).toContainReact(title);
});


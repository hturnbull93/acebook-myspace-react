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

it("has Sign up form in it (enzyme)", () => {
  const wrapper = shallow(<Signup />);
  const form =  wrapper.find("form");
  form.simulate("change", {firstName: "tom", lastName: "samson", email: "tom@harry.com", password: "password"});
  expect(wrapper).not.toContainReact(<div>Success</div>)
  form.simulate('submit');
  expect(wrapper).toContainReact(<div>Success</div>)
});


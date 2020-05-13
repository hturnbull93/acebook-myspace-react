// using enzyme
import React from "react";
import { shallow } from "enzyme";

import SignupForm from "./SignupForm.js";

it("renders without crashing", () => {
  shallow(<SignupForm />);
});

it("form onSubmit sends fetch and parses json result", (done) => {
  const mockSuccessResponse = {
    status: 200,
    loggedIn: true,
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<SignupForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    firstName: "tom",
    lastName: "samson",
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit");

  expect(global.fetch).toHaveBeenCalledTimes(1);

  done();
});


// using enzyme
import React from "react";
import { shallow } from "enzyme";
import waitUntil from 'async-wait-until';

import Signin from "./Signin.js";

it("renders without crashing", () => {
  shallow(<Signin />);
});

it("form onSubmit sends fetch and parses json result", (done) => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<Signin />);
  const form = wrapper.find("form");

  form.simulate("change", {
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit");

  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockClear();
  done();
});
// using enzyme
import React from "react";
import { shallow } from "enzyme";
import waitUntil from 'async-wait-until';

import SigninForm from "./SigninForm.js";

it("renders without crashing", () => {
  shallow(<SigninForm />);
});

it("form onSubmit sends fetch and parses json result", (done) => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<SigninForm />);
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

it("state.message is Logged In if successful fetch", async () => {
  const mockSuccessResponse = {
    status: 200,
    loggedIn: true,
    success: "Logged in",
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<SigninForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  expect(wrapper.state().message).toEqual("Logged in")
});

it("show an error if message contains an error", async () => {
  const mockSuccessResponse = {
    error: "Incorrect email or password"
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<SigninForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  
  expect(wrapper.state().message).toEqual("Incorrect email or password")
  expect(wrapper.state().isError).toEqual(true)
});

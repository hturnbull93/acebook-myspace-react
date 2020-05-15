// using enzyme
import React from "react";
import { shallow } from "enzyme";
import waitUntil from 'async-wait-until';

import SignupForm from "./SignupForm.js";

it("renders without crashing", () => {
  shallow(<SignupForm />);
});

it("form onSubmit sends fetch and parses json result", (done) => {
  const mockSuccessResponse = {};
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

  const wrapper = shallow(<SignupForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    firstName: "tom",
    lastName: "samson",
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  expect(wrapper.state().message).toEqual("Logged in")
});

it("show an error message on the page if message contains an error", async () => {
  const mockSuccessResponse = {
    status: 500
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
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  
  expect(wrapper.state().message).toEqual(500)
  expect(wrapper.state().isError).toEqual(true)
  expect(wrapper).toContainReact(<div>Email is already in use</div>)
});

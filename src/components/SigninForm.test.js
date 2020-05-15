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
    logged_in: true,
    status: "created",
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
  expect(wrapper.state().message).toEqual("created")
});

it("show an error if message contains an error", async () => {
  const mockSuccessResponse = {
    status: 401
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
  
  expect(wrapper.state().message).toEqual(401)
  expect(wrapper.state().isError).toEqual(true)
  expect(wrapper).toContainReact(<div>Incorrect email or password</div>)
});

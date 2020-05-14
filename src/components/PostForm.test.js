// using enzyme
import React from "react";
import { shallow } from "enzyme";
import waitUntil from 'async-wait-until';

import PostForm from "./PostForm.js";

it("renders without crashing", () => {
  shallow(<PostForm />);
});

it("can sends of a post request on submit", (done) => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<PostForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    message: "hello",
  });
  form.simulate("submit");

  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockClear();
  done();
})

it("state.message is Post created if successful fetch", async () => {
  const mockSuccessResponse = {
    status: 200,
    success: "Post Created",
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<PostForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    message: "hello",
  });
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  expect(wrapper.state().message).toEqual("Post Created")
});

it("show an error if message contains an error", async () => {
  const mockSuccessResponse = {
    error: "Could not post"
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<PostForm />);
  const form = wrapper.find("form");

  form.simulate("change", {
    firstName: "tom",
    lastName: "samson",
    email: "tom@harry.com",
    password: "password",
  });
  form.simulate("submit")
  await waitUntil(() => wrapper.state('isSubmitting') === false)
  
  expect(wrapper.state().message).toEqual("Could not post")
  expect(wrapper.state().isError).toEqual(true)
});


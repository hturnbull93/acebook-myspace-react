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
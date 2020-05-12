// using enzyme
import React from 'react';
import { shallow } from "enzyme";

// using react-testing-library
import { render } from "@testing-library/react";

import PostPage from './PostPage.js';

it("renders without crashing", () => {
  shallow(<PostPage />);
});

it("has h1 with Posts in it (enzyme)", () => {
  const wrapper = shallow(<PostPage />);
  const title = <h1>Posts</h1>;
  expect(wrapper).toContainReact(title);
});

it("has h1 with Posts in it (rtl)", () => {
  const { getByText } = render(<PostPage />);
  expect(getByText("Posts")).toBeInTheDocument();
});



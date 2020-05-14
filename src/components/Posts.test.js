// using enzyme
import React from 'react';
import { shallow } from "enzyme";

// using react-testing-library
import { render } from "@testing-library/react";

import Posts from './Posts.js';

it("renders without crashing", () => {
  shallow(<Posts />);
});

it("has h1 with Posts in it (enzyme)", () => {
  const wrapper = shallow(<Posts />);
  const title = <h1>Posts</h1>;
  expect(wrapper).toContainReact(title);
});

it("has h1 with Posts in it (rtl)", () => {
  const { getByText } = render(<Posts />);
  expect(getByText("Posts")).toBeInTheDocument();
});



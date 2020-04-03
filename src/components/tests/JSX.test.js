import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Example1 } from '../JSX';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("JSX 테스트", () => {
  act(() => {
    render(<Example1 />, container);
  });
  expect(document.querySelector('h2').textContent).toBe("Hello, Kim Muang!");
});
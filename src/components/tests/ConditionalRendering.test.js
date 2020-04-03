import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Example3 } from "../ConditionalRendering";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Event Handling Test", () => {
  act(() => {
    render(<Example3 />, container);
  });

  const button = document.querySelector('#example3');
  expect(button.textContent).toBe("Hide");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button.textContent).toBe("Show");
})
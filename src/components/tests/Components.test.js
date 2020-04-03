import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Example1 } from '../Components';
// import MockedExample from '../Example';

jest.mock("../Example", () => {
  return function DummyExample({ children }) {
    const title = "It is Mocked Example.";
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  };
});

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

it("Mocked Component Test", () => {
  act(() => {
    render(<Example1 />, container);
  })

  expect(
    container.querySelector('h1').textContent
  ).toBe('It is Mocked Example.');
});
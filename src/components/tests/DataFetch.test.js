import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DataFetch from '../DataFetch';

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

it("Fetch Data test", async () => {
  const fakeData = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }];

  jest.spyOn(global, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  });

  await act(async () => {
    render(<DataFetch />, container);
  });

  const {userId, id, title, body} = fakeData[0]
  expect(container.textContent).toBe(`${userId}, ${id}, ${title}, ${body}`);
  global.fetch.mockRestore();
})
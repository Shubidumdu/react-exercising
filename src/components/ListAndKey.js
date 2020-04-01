import React from "react";
import Example from "./Example";

function Example1() {
  const title = "기본 리스트 컴포넌트";

  function NumberList({ numbers }) {
    const listItems = numbers.map(number => (
      <li key={number.toString()}>{number}</li>
    ));
    return <ul>{listItems}</ul>;
  }

  return (
    <Example title={title}>
      <NumberList numbers={[2, 4, 6, 8, 10]} />
    </Example>
  );
}

function Example2() {
  const title = "인라인으로 리스트 컴포넌트 처리";

  function NumberList({ numbers }) {
    return (
      <ul>
        {numbers.map(number => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    );
  }

  return (
    <Example title={title}>
      <NumberList numbers={[1, 2, 3, 4, 5]} />
    </Example>
  );
}

export default function ListAndKey() {
  return (
    <>
      <Example1 />
      <Example2 />
    </>
  );
}

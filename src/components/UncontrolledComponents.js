import React, { useRef } from "react";
import Example from "./Example";

function Example1() {
  const title = "비제어 컴포넌트 생성";

  function NameForm() {
    const input = useRef();
    const onSubmit = e => {
      alert(`전송된 이름은 ${input.current.value} 입니다.`);
      e.preventDefault();
    };

    return (
      <form onSubmit={onSubmit}>
        <label>
          이름: <input defaultValue="철수" type="text" ref={input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  return (
    <Example title={title}>
      <NameForm />
    </Example>
  );
}

export default function UncontrolledComponents() {
  return (
    <>
      <Example1 />
    </>
  );
}

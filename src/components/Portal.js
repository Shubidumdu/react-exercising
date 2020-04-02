import React, { useState } from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

function Example1() {
  const title = "Portal 사용하기";

  function MyPortal() {
    const targetNode = document.getElementById("target");
    const [input, setInput] = useState("");
    const [portal, setPortal] = useState(false);

    const onClick = e => {
      setPortal(true);
    };

    const onChange = e => {
      setInput(e.target.value);
    };

    if (portal) {
      return ReactDOM.createPortal(input, targetNode);
    }

    return (
      <>
        <input type="text" onChange={onChange} />
        <button onClick={onClick}>Portal!</button>
      </>
    );
  }

  return (
    <Example title={title}>
      <div id="target">안녕! </div>
      <MyPortal />
    </Example>
  );
}

export default function Portal() {
  return (
    <>
      <Example1 />
    </>
  );
}

import React, { useState } from "react";
import Example from "./Example";

function Example1() {
  const title = "Render Props 사용하기!";

  function Cat({ mouse }) {
    const style = {
      width: "5px",
      height: "5px",
      backgroundColor: "red",
      position: "absolute",
      left: mouse.x,
      top: mouse.y,
    };

    return <span style={style} />;
  }

  function Mouse({ render }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const onMouseMove = e => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    return (
      <div style={{ height: "100vh" }} onMouseMove={onMouseMove}>
        {render(mouse)}
      </div>
    );
  }

  function MouseTracker() {
    const mouseRender = mouse => <Cat mouse={mouse} />
    return (
      <div>
        <h2>마우스를 움직여보세요!</h2>
        <Mouse render={mouseRender} />} />
      </div>
    );
  }

  return (
    <Example title={title}>
      <MouseTracker />
    </Example>
  );
}

export default function RenderProps() {
  return (
    <>
      <Example1 />
    </>
  );
}

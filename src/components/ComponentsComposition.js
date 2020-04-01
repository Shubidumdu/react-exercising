import React from "react";
import Example from "./Example";

function Example1() {
  const title = "컴포넌트에 다른 컴포넌트 담기";

  function FancyBorder(props) {
    const style = {
      color: props.color,
    };

    return (
      <div className={"FancyBorder FancyBorder-" + props.color} style={style}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  return (
    <Example title={title}>
      <WelcomeDialog />
    </Example>
  );
}

export default function ComponentsComposition() {
  return (
    <>
      <Example1 />
    </>
  );
}

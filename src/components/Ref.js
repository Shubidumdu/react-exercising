import React, { useRef, useState } from "react";
import Example from "./Example";

function Example1() {
  const title = "클래스 컴포넌트에서 DOM 엘리먼트에 대해 Ref 사용하기";

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      alert(this.myRef.current);
      console.log(this.myRef.current);
    }

    render() {
      return (
        <div ref={this.myRef}>
          안녕!<button onClick={this.handleClick}>Ref!</button>
        </div>
      );
    }
  }

  return (
    <Example title={title}>
      <MyComponent />
    </Example>
  );
}

function Example2() {
  const title = "클래스 컴포넌트에서 컴포넌트 인스턴스에 대해 Ref 사용하기";

  class AnotherComponent extends React.Component {
    render() {
      return <input type="text"></input>;
    }
  }

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      alert(this.myRef.current);
      console.log(this.myRef.current);
    }

    render() {
      return (
        <>
          <AnotherComponent ref={this.myRef} />
          <button onClick={this.handleClick}>Ref!</button>
        </>
      );
    }
  }

  return (
    <Example title={title}>
      <MyComponent />
    </Example>
  );
}

function Example3() {
  const title = "함수 컴포넌트에서 useRef로 Ref 사용하기";
  const textInput = useRef(null);

  const handleClick = () => {
    alert(textInput.current);
    console.log(textInput.current);
  };

  return (
    <Example title={title}>
      <input type="text" ref={textInput} />
      <button onClick={handleClick}>Ref!</button>
    </Example>
  );
}

function Example4() {
  const title = "Callback Ref 사용하기";
  const [textInput, setTextInput] = useState(null);

  const callbackRef = element => {
    setTextInput(element);
  };

  const handleClick = e => {
    alert(textInput);
    console.log(textInput);
  };

  return (
    <Example title={title}>
      <input type="text" ref={callbackRef} />
      <button onClick={handleClick}>Ref!</button>
    </Example>
  );
}

function Example5() {
  const title = "Forward Ref";

  const ref = React.createRef();
  const handleClick = e => {
    console.log(ref.current);
    alert(ref.current);
  }

  const InputComponent = React.forwardRef((props, ref) => {
    const { handleClick } = props;

    return (
      <>
        <input type="text" ref={ref} />
        <button onClick={handleClick}>Ref!</button>
      </>
    );
  });

  return <Example title={title}>
    <InputComponent ref={ref} handleClick={handleClick}/>
  </Example>
}

export default function Ref() {
  return (
    <>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
    </>
  );
}

import React from "react";
import Example from "./Example";

function Example1() {
  const title = "클래스 컴포넌트에서 Context 사용";
  const MyContext = React.createContext("기본값입니다.");

  function Component() {
    class InnerContent extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        let value = this.context;
        return <div>{value}</div>;
      }
    }

    InnerContent.contextType = MyContext;

    return (
      <MyContext.Provider value={"이건 클래스형 컴포넌트!"}>
        <InnerContent />
      </MyContext.Provider>
    );
  }

  return (
    <Example title={title}>
      <Component />
    </Example>
  );
}

function Example2() {
  const title = "함수 컴포넌트에서 Context 사용";
  const MyContext = React.createContext("기본값입니다.");

  function Component() {
    function InnerContent() {
      return (
        <MyContext.Consumer>
          {value => <div>{value}</div>}
        </MyContext.Consumer>
      );
    }

    return (
      <MyContext.Provider value={"이건 함수형 컴포넌트!"}>
        <InnerContent />
      </MyContext.Provider>
    );
  }

  return (
    <Example title={title}>
      <Component />
    </Example>
  );
}

export default function Context() {
  return (
    <>
      <Example1 />
      <Example2 />
    </>
  );
}

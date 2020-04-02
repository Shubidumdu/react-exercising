import React, { useState } from "react";
import Example from "./Example";

function Example1() {
  const title = "Error Boundary로 컴포넌트 에러 처리하기";

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(e) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error);
      console.log(errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <div>뭔가 오류가 발생했어요!</div>;
      }

      return <>{this.props.children}</>;
    }
  }

  function InnerContent({ getError }) {
    if (getError) throw new Error();

    return <div>발생한 에러가 없어요!</div>;
  }

  return (
    <Example title={title}>
      <ErrorBoundary>
        <InnerContent getError={false} />
      </ErrorBoundary>
    </Example>
  );
}

function Example2() {
  const title = "이벤트 핸들러에서의 오류 처리";
  const [hasError, setHasError] = useState(false);

  function MyComponent() {
    const onClick = event => {
      try {
        throw new Error();
      } catch (error) {
        setHasError(true);
      }
    };

    if (hasError) {
      return <div>오류가 발생했습니다!</div>;
    }

    return <button onClick={onClick}>오류 발생!</button>;
  }

  return (
    <Example title={title}>
      <MyComponent />
    </Example>
  );
}

export default function ErrorBoundary() {
  return (
    <>
      <Example1 />
      <Example2 />
    </>
  );
}

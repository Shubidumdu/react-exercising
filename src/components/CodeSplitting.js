import React, { Suspense } from "react";
import Example from "./Example";

function Example1() {
  const title = "React.lazy 사용하기";

  const LazyComponent = React.lazy(() => import("./LazyComponent"));

  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    );
  }

  return (
    <Example title={title}>
      <MyComponent />
    </Example>
  );
}

export default function CodeSplitting() {
  return (
    <>
      <Example1 />
    </>
  );
}

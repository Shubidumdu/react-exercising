import React from "react";

function Example({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Example;

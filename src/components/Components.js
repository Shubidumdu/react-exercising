import React from 'react';
import Example from './Example';

function Example1() {
  const title = "props 받기!"

  function GetProps(props) {
    return <h2>Hello, {props.name}!</h2>
  }

  return <Example title={title}>
    <GetProps name="Shubidumdu!" />
  </Example>
}

function Example2() {
  const title = "클래스형 컴포넌트"

  class GetProps extends React.Component {
    render() {
      return <h2>Hello, {this.props.name}</h2>
    }
  }

  return <Example title={title}>
    <GetProps name="Shubidumdu!" />
  </Example>
}

export default function Components() {
  return (
  <>
    <Example1 />
    <Example2 />
  </>
  );
}
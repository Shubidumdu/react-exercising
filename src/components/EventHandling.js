import React from 'react';
import Example from './Example';

function Example1() {
  const title = "기본 이벤트 핸들링";

  function handleClick(e) {
    e.preventDefault();
    alert("버튼을 눌렀습니다!");
  }

  return (
    <Example title={title}>
      <button onClick={handleClick}>버튼</button>
    </Example>
  )
}

function Example2() {
  const title = "클래스 컴포넌트에서의 이벤트 핸들링";

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }))
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      )
    }
  }

  return <Example title={title}>
    <Toggle />
  </Example>
}

function EventHandling() {
  return <>
    <Example1 />
    <Example2 />
  </>;
}

export default EventHandling;
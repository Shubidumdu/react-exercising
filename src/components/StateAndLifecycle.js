import React from 'react';
import Example from './Example';

function Example1() {
  const title = "함수 컴포넌트를 클래스 컴포넌트로 바꾸기";

  // 아래는 함수형 컴포넌트
  function _Clock({date}) {
    return (
      <div>
        <h2>It is {date.toLocalTimeString()}</h2>
      </div>
    )
  }

  // 위의 컴포넌트를 참고해서 만든 클래스형 컴포넌트
  class Clock extends React.Component {
    render() {
      const { date } = this.props;
      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }

  return <Example title={title}>
    <Clock date={new Date()}/>
  </Example>
}

function Example2() {
  const title = "props를 state로 옮기기";

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      const { date } = this.state;
      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }

  return <Example title={title}><Clock /></Example>
}

function Example3() {
  const title = "LifeCycle 메서드 추가하기";

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      // 마운트될 때
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }

    componentWillUnmount() {
      // 언마운트될 때
      clearInterval(this.timerID);
    }

    tick() {
      // 주의할 점, State를 직접 수정하면 안 된다. 
      // 반드시 setState를 사용할 것.
      this.setState({
        date: new Date()
      })
    }

    render() {
      const { date } = this.state;
      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }

  return <Example title={title}>
    <Clock />
  </Example>
}

function StateAndLifecycle() {

  return <>
    <Example1 />
    <Example2 />
    <Example3 />
  </>
}

export default StateAndLifecycle;
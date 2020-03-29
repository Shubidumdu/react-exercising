import React from 'react';
import Example from './Example';

function LoginButton({onClick}) {
  return (
    <button onClick={onClick}>
      로그인
    </button>
  );
}

function LogoutButton({onClick}) {
  return (
    <button onClick={onClick}>
      로그아웃
    </button>
  )
}

function Example1() {
  const title = "클래스형 컴포넌트에서의 조건부 렌더링"

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLogg}
    }
  }
}

function ConditionalRendering() {
  return <></>;
}

export default ConditionalRendering;
import React from "react";
import Example from "./Example";

function LoginButton({ onClick }) {
  return <button onClick={onClick}>로그인</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>로그아웃</button>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

function Example1() {
  const title = "클래스형 컴포넌트에서의 조건부 렌더링";
  const title2 = "조건부 연산자로 If-Else구문 인라인 표현하기";

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }

      if (this.props.inInline) {
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
              <LogoutButton onClick={this.handleLogoutClick} />
            ) : (
              <LoginButton onClick={this.handleLoginClick} />
            )}
          </div>
        );
      } else {
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
        );
      }
    }
  }

  return (
    <>
      <Example title={title}>
        <LoginControl inInline={false} />
      </Example>
      <Example title={title2}>
        <LoginControl inInline={true} />
      </Example>
    </>
  );
}

function Example2() {
  const title = "&& 연산자로 If를 인라인 표현하기";

  const messages = ["React", "Re: React", "Re:Re: React"];

  function Mailbox({ unreadMessages }) {
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && (
          <h2>You have {unreadMessages.length} unread messages.</h2>
        )}
      </div>
    );
  }

  return (
    <Example title={title}>
      <Mailbox unreadMessages={messages} />
    </Example>
  );
}

function Example3() {
  const title = "컴포넌트 렌더링 막기";

  function WarningBanner({ warn }) {
    if (warn === false) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    )
  }

  class Page extends React.Component {
    constructor (props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }

    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? "Hide" : "Show"}
          </button>
        </div>
      )
    }
  }

  return <Example title={title}>
    <Page />
  </Example>
}

function ConditionalRendering() {
  return (
    <>
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  );
}

export default ConditionalRendering;

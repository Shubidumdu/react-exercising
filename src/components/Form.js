import React from "react";
import Example from "./Example";

function Example1() {
  const title = "제어 컴포넌트 만들기";

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        value: e.target.value,
      });
    }

    handleSubmit(e) {
      alert(`A name was submitted: ${this.state.value.toUpperCase()}`);
      e.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  return (
    <Example title={title}>
      <NameForm />
    </Example>
  );
}

function Example2() {
  const title = "textarea로 제어 컴포넌트 생성";

  class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "Please write an essay about your favorite DOM element.",
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        value: e.target.value,
      });
    }

    handleSubmit(e) {
      alert("An essay was submitted: " + this.state.value);
      e.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  return (
    <Example title={title}>
      <EssayForm />
    </Example>
  );
}

function Example3() {
  const title = "select 태그 다루기";

  class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "coconut" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
      alert("Your favorite flavor is: " + this.state.value);
      e.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            좋아하는 맛을 골라주세요. :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  return (
    <Example title={title}>
      <FlavorForm />
    </Example>
  );
}

function Example4() {
  const title = "다중 입력 제어하기";

  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2,
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
      const target = e.target;
      const value = target.name === "isGoing" ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value,
      });
    }

    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      );
    }
  }

  return (
    <Example title={title}>
      <Reservation />
    </Example>
  )
}

export default function Form() {
  return (
    <>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </>
  );
}

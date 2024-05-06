import React, { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    console.log(this.props.name + " render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h1>
          Count1: {count}, Count2: {count2}
        </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase COUNT
        </button>
        <h2>Name: {name}</h2>
        <p>Location: {location}</p>
      </div>
    );
  }
}
export default UserClass;

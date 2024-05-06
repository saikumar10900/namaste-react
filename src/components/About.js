import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileInfo: {} };
    console.log("parent constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saikumar10900");

    const json = await data.json();
    console.log("json: ", json);
    this.setState({ profileInfo: json });
  }
  componentDidUpdate() {
    console.log("updated");
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <User
          name={this.state.profileInfo.name}
          image={this.state.profileInfo.avatar_url}
        />
      </div>
    );
  }
}
export default About;

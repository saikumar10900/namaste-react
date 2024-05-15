import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { UserContext } from "../utils.js/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileInfo: {} };
    console.log("parent constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saikumar10900");

    const json = await data.json();
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
        <UserClass />
        <UserContext.Consumer>
          {({ loggedinUser }) => <h1>USER: {loggedinUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;

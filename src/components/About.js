import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { UserContext } from "../utils.js/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileInfo: {} };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saikumar10900");
    const json = await data.json();
    this.setState({ profileInfo: json });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    const {name, avatar_url} = this.state.profileInfo;
    return (
      <div>
        <h1>About</h1>
        <User
          name={name}
          image={avatar_url}
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

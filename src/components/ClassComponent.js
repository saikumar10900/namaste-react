import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
  }
  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }
  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }
  render() {
    console.log(this.props.name + " render");
    return (
      <div className="w-[500px] h-[300px] border border-cyan-900">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default ClassComponent;

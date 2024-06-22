import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="w-[500px] h-[300px] border border-cyan-900">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default ClassComponent;

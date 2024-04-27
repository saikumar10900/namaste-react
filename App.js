import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Welcome Functional Component</h1>;

const HeaderComponent = () => {
  return (
    <div id="parent">
      {Title()}
      <Title />
      <Title></Title>
      <h2>Functional component is a function that returns a JSX element</h2>
      <h3>{"we can write any JS/JSX code inside {} braces"}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

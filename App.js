import React from "react";
import ReactDOM from "react-dom/client";

const parentEle = React.createElement("div", { id: "parent" }, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "H1 from parent"),
    React.createElement("h2", {}, "H2 from parent"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "H1 from parent"),
    React.createElement("h2", {}, "H2 from parent"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentEle);

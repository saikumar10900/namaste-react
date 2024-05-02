import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <Header />
        <Search />
        {/* <Restaurant name="A" /> */}
        <Body />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

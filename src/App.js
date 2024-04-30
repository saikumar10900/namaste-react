import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <Header />
        <Search />
        <Restaurant name="A" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

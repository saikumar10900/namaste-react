import React from "react";
import ReactDOM from "react-dom/client";

const restarants = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          alt="logo"
          className="app-logo"
        />
      </div>
      <div className="header-children">
        <ul className="ul-elements">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name } = props.restarant;
  return (
    <div className="res-card">
      <h1>{name}</h1>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div className="search-bar">
      <input type="search" />
      <button>Search</button>
    </div>
  );
};

const RestaurantsComponent = () => {
  return (
    <div className="restarntas">
      {restarants.map((each) => (
        <RestaurantCard restarant={each} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <div>
        <Header />
        <SearchComponent />
        <RestaurantsComponent />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

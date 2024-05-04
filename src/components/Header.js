import { useState } from "react";

const Header = () => {
  const [loginState, setLoginState] = useState(false);
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
          <li>About</li>
          <li>Contact</li>
          <li>
            {
              <button onClick={() => setLoginState(!loginState)}>
                {loginState ? "Logout" : "Login"}
              </button>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

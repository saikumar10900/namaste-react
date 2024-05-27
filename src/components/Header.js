import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import { UserContext } from "../utils.js/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginState, setLoginState] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200">
      <div className="logo-container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          alt="logo"
          className="w-[200px] m-4 p-4"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            Online Status: {onlineStatus ? "ONLINE" : "OFFLINE"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link className="px-4" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            {
              <button onClick={() => setLoginState(!loginState)} className="">
                {loginState ? "Logout" : "Login"}
              </button>
            }
          </li>
          <li className="px-4 font-mono">USER: {loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

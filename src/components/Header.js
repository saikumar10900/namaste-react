import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import { UserContext } from "../utils.js/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginState } from "../utils.js/loginUserSlice";

const Header = () => {
  // const [loginState, setLoginState] = useState(false);
  const loginState = useSelector((store) => store.user.loginState);
  const dispatchAction = useDispatch();
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const [time, setTime] = useState(new Date());

  const handleLoginState = () => {
    dispatchAction(toggleLoginState());
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

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
          <li className="px-4 font-bold">
            <Link to="/carousel">Carousel</Link>
          </li>
          <li className="px-4">
            {
              <button onClick={handleLoginState} className="">
                {loginState ? "Logout" : "Login"}
              </button>
            }
          </li>
          <li className="px-4 font-mono">USER: {loggedinUser}</li>
          <li className="font-bold">{formatTime(time)}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold text-lg m-4 p-4">This is CART</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-xl"
        onClick={clearCartItems}
        disabled={cartItems.length === 0}
      >
        Clear
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;

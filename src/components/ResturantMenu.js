import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <h1> Loading......</h1>;

  const { text } = resData.card.card;

  return (
    <div>
      <h1>{text}</h1>
      <p>Rating</p>
      <ul>
        <li>item </li>
        <li>item </li>
        <li>item </li>
        <li>item </li>
        <li>item </li>
        <li>item </li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;

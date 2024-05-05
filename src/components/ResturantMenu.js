import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_API } from "../utils.js/APIS";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    console.log(resId);
    const data = await fetch(RESTAURANT_API + resId);
    const json = await data.json();
    setResData(json.data.cards[0]);
  };

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

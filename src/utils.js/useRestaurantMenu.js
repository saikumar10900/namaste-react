import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./APIS";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API + resId);
    const json = await data.json();
    setResData(json.data.cards[0]);
  };
  return resData;
};
export default useRestaurantMenu;

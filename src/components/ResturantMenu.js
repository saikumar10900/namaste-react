import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(null);
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <h1> Loading......</h1>;

  const { name, cuisines, costForTwoMessage } = resData.cards[2].card.card.info;

  const categories =
    (resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
      (eachCategory) =>
        eachCategory.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((eachCat, index) => (
        <RestaurantCategory
          key={eachCat?.card?.card.title}
          data={eachCat?.card?.card}
          showItemList={index === currentActiveIndex ? true : false}
          setItemListIndex={() => setCurrentActiveIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

import { useContext } from "react";
import { UserContext } from "../utils.js/UserContext";

const RestaurantCard = (props) => {
  const { name, rating } = props;

  const { loggedinUser } = useContext(UserContext);

  return (
    <div className="m-4 w-[250px] p-4 border border-solid border-black rounded-lg">
      <h1 className="text-lg-600">{name}</h1>
      <p>{rating}</p>
      <h3 className="font-bold">User: {loggedinUser}</h3>
    </div>
  );
};

export const withBadgeRestaurant = (RestaurantCard) => {
  return (data) => {
    return (
      <div>
        <label>Badge</label>
        <RestaurantCard {...data} />
      </div>
    );
  };
};

export default RestaurantCard;

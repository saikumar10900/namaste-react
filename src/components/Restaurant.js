import { useContext } from "react";
import { UserContext } from "../utils.js/UserContext";
import { CLOUDINARY_URL } from "../utils.js/APIS";

const RestaurantCard = (props) => {
  const { name, rating, cloudinaryImgId } = props;

  const { loggedinUser } = useContext(UserContext);

  return (
    <div className="m-4 w-[250px] p-4 border border-solid border-black rounded-lg flex justify-between">
      <div>
        <h1 className="text-lg-600">{name}</h1>
        <p>{rating}</p>
        <h3 className="font-bold">Active user: {loggedinUser}</h3>
      </div>
      <div>
        <img src={CLOUDINARY_URL + cloudinaryImgId} className="w-[100px]" />
      </div>
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

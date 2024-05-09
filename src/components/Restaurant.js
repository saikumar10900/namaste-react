const RestaurantCard = (props) => {
  const { name, rating } = props;

  return (
    <div className="m-4 w-[150px] p-4 border border-solid border-black rounded-lg">
      <h1 className="text-lg-600">{name}</h1>
      <p>{rating}</p>
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

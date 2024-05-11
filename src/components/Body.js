import React, { useState } from "react";
import { useEffect } from "react";
import RestaurantCard, { withBadgeRestaurant } from "./Restaurant";
import { Link } from "react-router-dom";
import { SWIGGY_MAIN_API } from "../utils.js/APIS";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
  const [filterRes, setFilterRes] = useState([]);

  const onlineStatus = useOnlineStatus();

  const PromotedCard = withBadgeRestaurant(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_MAIN_API);
    const json = await data.json();

    setFilterRes(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTop5 = () => {
    setFilterRes(filterRes.filter((eachRes) => eachRes.info.avgRating > 4));
  };

  if (!onlineStatus)
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );

  if (filterRes?.length === 0) {
    return <h1>Loading........</h1>;
  }

  return (
    <>
      <button
        className="border border-solid border-green-400 rounded-xl p-4"
        onClick={filterTop5}
      >
        Top 5 restaurants
      </button>
      <div className="flex flex-wrap">
        {filterRes?.map((eachRes) => {
          const resId = eachRes.info.id;
          return (
            <Link key={resId} to={"/restaurants/" + resId}>
              {Object.values(eachRes.info.badges) ? (
                <PromotedCard
                  name={eachRes.info.name}
                  rating={eachRes.info.avgRating}
                />
              ) : (
                <RestaurantCard
                  name={eachRes.info.name}
                  rating={eachRes.info.avgRating}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;

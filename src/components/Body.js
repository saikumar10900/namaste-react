import React, { useState } from "react";
import { useEffect } from "react";
import Restaurant from "./Restaurant";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRes(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTop5 = () => {
    setFilterRes(filterRes.filter((eachRes) => eachRes.info.avgRating > 4));
  };

  return (
    <>
      <button onClick={filterTop5}>Top 5 restaurants</button>
      <div className="res-cards">
        {filterRes.map((eachRes) => (
          <Restaurant
            name={eachRes.info.name}
            rating={eachRes.info.avgRating}
          />
        ))}
      </div>
    </>
  );
};
export default Body;

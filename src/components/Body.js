import React, { useState } from "react";
import { useEffect } from "react";
import Restaurant from "./Restaurant";

const Body = () => {
  const [res, setRes] = useState([]);
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
  };
  return (
    <div className="res-cards">
      {res.map((eachRes) => (
        <Restaurant name={eachRes.info.name} />
      ))}
    </div>
  );
};
export default Body;

import React, { useState } from "react";
import { useEffect } from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import { SWIGGY_MAIN_API } from "../utils.js/APIS";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_MAIN_API);
    const json = await data.json();

    setRes(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTop5 = () => {
    setFilterRes(filterRes.filter((eachRes) => eachRes.info.avgRating > 4));
  };

  if (res?.length === 0) {
    return <h1>Loading........</h1>;
  }

  return (
    <>
      <button onClick={filterTop5}>Top 5 restaurants</button>
      <div className="res-cards">
        {filterRes?.map((eachRes) => {
          const resId = eachRes.info.id;
          return (
            <Link key={resId} to={"/restaurants/" + resId}>
              <Restaurant
                name={eachRes.info.name}
                rating={eachRes.info.avgRating}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;

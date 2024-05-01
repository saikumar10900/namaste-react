import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {};
  return <div>Body</div>;
};
export default Body;

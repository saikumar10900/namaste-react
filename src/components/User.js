import { useState } from "react";

const User = ({ name, image }) => {
  return (
    <div className="user">
      <img src={image} />
      <h2>Name: {name}</h2>
    </div>
  );
};

export default User;

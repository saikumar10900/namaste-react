const Restaurant = (props) => {
  const { name, rating } = props;

  return (
    <div className="res-card">
      <h1>{name}</h1>
      <p>{rating}</p>
    </div>
  );
};
export default Restaurant;

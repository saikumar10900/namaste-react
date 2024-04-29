const Restaurant = (props) => {
  const { name } = props.restarant;
  return (
    <div className="res-card">
      <h1>{name}</h1>
    </div>
  );
};
export default Restaurant;

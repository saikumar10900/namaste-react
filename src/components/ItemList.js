const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((eachItem) => {
          const { id, name, price, defaultPrice, description } =
            eachItem.card.info;
          return (
            <div
              key={id}
              className="p-2 m-2 border-b-2 border-gray-300 text-left"
            >
              <div>
                <span className="font-bold py-4">{name}</span>
                <span> - ₹ {price ? price / 100 : defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;

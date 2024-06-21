import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemList, setItemListIndex }) => {
  const { title, itemCards } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleItemListVisibility = () => {
    setItemListIndex();
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleItemListVisibility}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span className="font-bold text-lg">+</span>
        </div>
        {showItemList && isOpen && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

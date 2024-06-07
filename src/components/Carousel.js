import { useEffect, useState } from "react";
import { images } from "../utils.js/images";

const Carousel = () => {
  const [activeImageId, setActiveImageId] = useState(0);
  const handlePrev = () => {
    setActiveImageId(!activeImageId ? images.length - 1 : activeImageId + 1);
  };
  const handleNext = () => {
    setActiveImageId((activeImageId + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeImageId]);

  return (
    <div className="flex justify-center py-4">
      <button
        type="button"
        className="font-bold p-4 m-10 text-3xl text-green-300"
        onClick={handlePrev}
      >
        {"<"}
      </button>

      {images.map((imageUrl, index) => (
        <img
          src={imageUrl}
          alt="wallpaper"
          key={index}
          className={
            "w-[500px] h-[400px] object-contain " +
            (activeImageId === index ? "block" : "hidden")
          }
        />
      ))}

      <button
        type="button"
        onClick={handleNext}
        className="font-bold p-4 m-10 text-3xl text-green-300"
      >
        {">"}
      </button>
    </div>
  );
};
export default Carousel;

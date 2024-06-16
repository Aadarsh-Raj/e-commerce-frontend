import { useState } from "react";
import "./SelectableSize.css";

const SelectableSize = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="sizeContainer">
      <p>Size: {selectedSize}</p>
      <div className="sizeButtons">
        {sizes.map((size) => (
          <button
            key={size}
            className={`sizeButton ${selectedSize === size && "active"}`}
            onClick={() => handleClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectableSize;

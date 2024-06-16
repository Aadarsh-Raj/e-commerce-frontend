import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  return (
    <div>
      <Rating
        onClick={handleRating}
        size={25}
        fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
      />
    </div>
  );
};

export default Ratings;

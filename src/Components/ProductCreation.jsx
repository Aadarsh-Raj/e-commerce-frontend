import React from "react";
import "./Styles/productcreation.css";
const ProductCreation = () => {
  return (
    <>
      <div className="product-create-container">
        <form action="">
          <input type="text" placeholder="Add title" />
          <input type="number" placeholder="Add Price" />
          <textarea name="" id="" rows={10} placeholder="Add Description"></textarea>
          <input type="number" placeholder="Add discount without %" />
          <input type="color" /> <input type="file" placeholder="Add images"/>
          <input type="number" placeholder="Add stock" />
          <input type="text" placeholder="Add brand" />
          <input type="text" placeholder="Add brand" />
          <input type="text" placeholder="Add category" />
          <input type="button" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ProductCreation;

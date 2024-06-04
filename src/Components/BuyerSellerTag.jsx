import React from "react";
import "./Styles/buyerSeller.css";
import { useSelector, useDispatch } from "react-redux";
import { setBuyerSellerTag } from "../redux/counterSlice";
const BuyerSellerTag = (props) => {
  const dispatch = useDispatch();
  const getTag = () => {
    dispatch(setBuyerSellerTag(props.tag));
  };
  return (
    <>
      <p className={`buyer-seller-tag ${props.className}`} onClick={getTag}>
        {props.tag}{" "}
      </p>
    </>
  );
};

export default BuyerSellerTag;

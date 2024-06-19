import React from "react";
import CardList from "./CardList/CardList";

const Home = () => {
// const getAllProducts = async ()=>{
// try {
//   const response = await fetch("http://localhost:4000/api/products/all");
//   const data = await response.json();
// console.log(data);
// } catch (error) {
//   console.log(error)
// }
// }
// getAllProducts();
  return (
    <>
      <CardList />
      This is home page
    </>
  );
};

export default Home;

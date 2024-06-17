import { Route, Routes } from "react-router-dom";
import "./App.css";
// import CardList from "./Components/CardList/CardList";
// import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";

import LoginPage from "./Components/LoginPage";
// import ProductCart from "./Components/ProductCart/ProductCart";
import UserProfile from "./Components/UserProfile";
import WishlistContainer from "./Components/WishlistContainer";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AdminPanel from "./Components/AdminPanel";
function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/mywishlist"} element={<WishlistContainer />} />
          <Route path={"/myprofile"} element={<UserProfile />} />
          <Route path={"/productcart"} element={<ProductCart />} />
          <Route path={"/seller"} element={<AdminPanel />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

/*
if logged in --> Landing Page
if not logged in --> Loggin Page

1. Buyer tag, seller tag --> 1 component
2. login --> 1 component 
3. sign page for buyer and seller 



*/

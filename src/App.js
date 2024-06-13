import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./Components/LoginPage";
import UserProfile from "./Components/UserProfile";
import WishlistContainer from "./Components/WishlistContainer";
import Home from "./Components/Home";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer"
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

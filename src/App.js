import "./App.css";
import CardList from "./Components/CardList/CardList";
// import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";

import LoginPage from "./Components/LoginPage";
import ProductCart from "./Components/ProductCart/ProductCart";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <CardList />
        {/* <ProductCart /> */}
        {/* <LoginPage /> */}
        {/* <UserProfile /> */}
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

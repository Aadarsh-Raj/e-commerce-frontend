import "./App.css";

import LoginPage from "./Components/LoginPage";
import UserProfile from "./Components/UserProfile";
import WishlistContainer from "./Components/WishlistContainer";

function App() {
  return (
    <>
      <main className="main">
       {/* <LoginPage /> */}
       <WishlistContainer />
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

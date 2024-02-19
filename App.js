import React from "react";
import ReactDOM from "react-dom/client";





const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const styleCard = {
  backgroundColor:"#D4E7C5"
}


const RestaurantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor:"#F1EAFF"}}>
      <h3>Spaices</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-conatiener">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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
  backgroundColor: "#D4E7C5",
};

const RestaurantCard = ({resName, cuisine}) => {
  //console.log(prop);
  return (
    <div className="res-card" style={{ backgroundColor: "#FDF4F5" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPTLuHFLsFAylb5BEg56uj98p_IsdlCHfH0LgHJR-4w&s"
        alt="Res Logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>Ratings :4.5</h4>
      <h4>38 Mintus</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-conatiener">
        <RestaurantCard
          resName="Spice Kitchen"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Wings, Fries" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

import React from "react";
import "./Css/index.css";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="mini-nav">
          <div>SAVE MORE ON APP</div>
          <div>Sell on Daraz</div>
          <div>CUSTOMER CARE</div>
          <div>Track my order</div>
          <div>login</div>
          <div>sign up</div>
          <div>भाषा परिवर्तन</div>
        </div>
        <div className="main-nav">
          <div className="nav-logo">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
              alt="daraz logo"
            />
          </div>
          <div className="nav-search">
            <input type="text" placeholder="Search in daraz" />
            <img src="./darazSearch.png" alt="Daraz search icon" />
          </div>
          <div className="nav-items"></div>
          <div className="nav-discount">
            <img
              src="https://icms-image.slatic.net/images/ims-web/9a2c07f6-fdac-4f0c-83ab-a6ec13604a3b.gif"
              alt="daraz discount gif malvika subba"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

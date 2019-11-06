import React from "react";
import Logo from "./logo.png";
import browsbutton from "./circled-right-2.png";
import "materialize-css/dist/css/materialize.min.css";

export default function landing() {
  return (
    <div>
      <img class="responsive-img" src={Logo} alt="logo" />
      <div>
        <p>
          Find your perfect trip. designed by insiders who know ans love their
          cities
        </p>
        <p>Start browsing</p>
        <img src={browsbutton} alt="start" class="responsive-img" />
      </div>
      <p>Want to build your own MYinterary</p>
      {/* <div>
        <a href="">Log In</a>
        <a href="">Create Account</a>
      </div> */}
    </div>
  );
}

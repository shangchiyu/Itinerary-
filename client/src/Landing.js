import React from "react";
import Logo from "./logo.png";
import browsbutton from "./circled-right-2.png";
import "materialize-css/dist/css/materialize.min.css";

export default function landing() {
  const brows = {
    width: "20%"
  };
  const headerBar = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };
  return (
    <div>
      <div style={headerBar}>
        <i className="medium material-icons">account_circle</i>
        <i className="medium material-icons">dehaze</i>
      </div>
      <img className="responsive-img" src={Logo} alt="logo" />
      <div>
        <p>
          Find your perfect trip. designed by insiders who know ans love their
          cities
        </p>
        <img
          src={browsbutton}
          alt="start"
          className="responsive-img"
          style={brows}
        />
      </div>
      <p>Popular MYinteraries</p>
    </div>
  );
}

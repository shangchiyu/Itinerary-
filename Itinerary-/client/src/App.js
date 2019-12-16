import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Cities from "./Cities";
import Navigation from "./Navigation";
import SignUp from "./SignUp";

import Itinerary from "./Itinerary";
import Activity from "./Activity";
import Profile from"./Profile"
function App() {
  console.log(localStorage,"locallllllll")
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/:city" component={Itinerary} />
          <Route exact path="/activity/:city" component={Activity} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

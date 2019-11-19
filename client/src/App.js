import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Landing from "./Landing";
import Cities from "./Cities";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
import Itinerary from "./Itinerary";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/:city" component={Itinerary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Cities from "./Cities";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

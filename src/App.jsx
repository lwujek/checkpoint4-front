import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Inscription from "./components/Inscription";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

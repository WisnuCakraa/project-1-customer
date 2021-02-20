import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { routerApp } from "./Configs/routerApp";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routerApp.map((item, index) => {
          const { path, compt, exact } = item;
          return (
            <Route key={index} exact={exact} path={path} component={compt} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;

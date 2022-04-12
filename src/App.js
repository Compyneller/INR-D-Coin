import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OurTeam from "./Pages/OurTeam";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={OurTeam} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

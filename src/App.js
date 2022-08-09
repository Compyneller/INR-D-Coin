import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OurTeam from "./Pages/OurTeam";
import Privacy from "./Pages/Privacy";
import Tc from "./Pages/Tc";

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
          <Route path="/pp" component={Privacy} />
          <Route path="/tc" component={Tc} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

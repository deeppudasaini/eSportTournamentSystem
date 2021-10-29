import "./styles.css";
import "./index.css";
import Home from "./container/Home";
import News from "./container/News";
import Player from "./container/Player";
import Stream from "./container/Stream";
import Team from "./container/Team";
import Tournament from "./container/Tournament";
import Login from "./container/Login";
import Register from "./container/Register";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Fade } from "react-reveal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/teams">
            <Team />
          </Route>
          <Route path="/players">
            <Player />
          </Route>
          <Route path="/tournaments">
            <Tournament />
          </Route>
          <Route path="/streams">
            <Stream />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Fade bottom duration={2000}>
          <Footer />
        </Fade>
      </Router>
    </div>
  );
}

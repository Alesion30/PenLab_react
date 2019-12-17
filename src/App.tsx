import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Dashborad from './pages/Dashboard';
import Home from './pages/Home';

const App: React.SFC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">グラフ</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            {/* <Home /> */}
            <h1>about</h1>
          </Route>
          <Route path="/dashboard">
            {/* <Users /> */}
            <Dashborad />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

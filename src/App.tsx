import AccessTime from '@material-ui/icons/AccessTime';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import './App.scss'
import Dashborad from './pages/Dashboard';
import Home from './pages/Home';

const App: React.SFC = () => {
  return (
    <Router>
      <div>
        <div id="nav" className="nav">
          <div className="icon">
            <ul>
              <li><Link to="/"><AccessTime /></Link></li>
              <li><Link to="/dashboard"><DashboardRoundedIcon /></Link></li>
            </ul>
          </div>
          <div className="text">
            <ul>
              <li><Link to="/">Timer</Link></li>
              <li><Link to="/dashboard">dashboard</Link></li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/dashboard">
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

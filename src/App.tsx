import AccessTime from '@material-ui/icons/AccessTime';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'unstated';
import './App.scss'
import Dashborad from './pages/Dashboard';
import Home from './pages/Home';
import Setting from './pages/Setting';

const App: React.SFC = () => {
  return (
    <Provider>
      <Router>
        <div>
          <div id="nav" className="nav">
            <div className="icon">
              <ul>
                <li><Link to="/"><AccessTime /></Link></li>
                <li><Link to="/dashboard"><DashboardRoundedIcon /></Link></li>
                <li><Link to="/setting"><SettingsIcon /></Link></li>
              </ul>
            </div>
            <div className="text">
              <ul>
                <li><Link to="/">Timer</Link></li>
                <li><Link to="/dashboard">DashBoard</Link></li>
                <li><Link to="/setting">Setting</Link></li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/dashboard">
              <Dashborad />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

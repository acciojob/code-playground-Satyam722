
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './../styles/App.css';
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {isAuthenticated ? (
          <p>Logged in, Now you can enter Playground</p>
        ) : (
          <p>You are not authenticated, Please login first</p>
        )}

        <Switch>
          <Route path="/login">
            <Login isAuthenticated={isAuthenticated} onLogin={handleLogin} />
          </Route>
          <PrivateRoute
            path="/playground"
            component={Playground}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/">
            <div>
              <h2>Page not Found</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

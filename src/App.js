import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { routes } from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          {/* <Navbar backgroundColor={photoColors.white} color={photoColors.black} /> */}
        </>

        {routes.map(route => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Router>
    );
  }
}

export default App;

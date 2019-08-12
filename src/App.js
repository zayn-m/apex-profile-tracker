import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Layout from "./Layout/Layout";
import Search from "./containers/Search";
import Profile from "./containers/Profile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/profile-stats" exact component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

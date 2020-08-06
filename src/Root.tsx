import * as React from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import No2 from "./pages/no2";
import Navigator from "./components/navigator";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";

const Root: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle whiteColor />
    <Navigator />
    <br />
    <br />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/no2" component={No2} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;

import * as React from "react";
import Home from "./pages/home";
import No1 from "./pages/no1";
import No2 from "./pages/no2";
import Navigator from "./components/navigator";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";

const Root: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle whiteColor />
    <Navigator />
    <hr />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/explor" component={No1} />
      <Route path="/no2" component={No2} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;

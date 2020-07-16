import * as React from "react";
import Home from "./pages/home";
import No1 from "./pages/no1";
import No2 from "./pages/no2";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

const Root: React.FC = () => (
  <BrowserRouter>
    <Link to="/">홈으로</Link>
    <br />
    <Link to="/no1">1로</Link>
    <br />
    <Link to="/no2">2로</Link>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/no1" component={No1} />
      <Route path="/no2" component={No2} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;

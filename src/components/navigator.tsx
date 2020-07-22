import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";

type NavigatorProps = {};

const Navigator: React.FC<NavigatorProps> = () => (
  <div>
    <Link to="/">Instagram</Link>
    <Search />
    <Link to="/">
      <span role="img" aria-label="home">
        🏠
      </span>
    </Link>
    <Link to="/explor">
      <span role="img" aria-label="explor">
        🧭
      </span>
    </Link>
    <span role="img" aria-label="heart">
      💔
    </span>
    <span role="img" aria-label="setting">
      ⚙️
    </span>
    <hr />
  </div>
);

export default Navigator;

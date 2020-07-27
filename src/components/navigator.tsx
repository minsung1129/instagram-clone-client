import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";
import instagram from "../img/instagram.png";
import styled from "styled-components";

type NavigatorProps = {};

const Navspan = styled.span`
  justify-content: space-around;
  display: flex;
`;
const Navdiv = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  ::link {
    justify-content: flex-start;
  }
`;

const Navigator: React.FC<NavigatorProps> = () => (
  <Navdiv>
    <Link to="/">
      <img src={instagram} width="120em" height="50em" alt="testA" />
    </Link>

    <Search />

    <Navspan>
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
    </Navspan>
  </Navdiv>
);

export default Navigator;

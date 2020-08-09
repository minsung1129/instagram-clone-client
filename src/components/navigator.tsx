import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './search';
import instagram from '../img/instagram.png';

type NavigatorProps = {};

const Navspan = styled.span`
  justify-content: space-around;
  display: flex;
`;
const Navdiv = styled.div`
  position: fixed;
  top: 0;
  align-items: center;
  background-color: white;
  width: 60%;
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

    <Search primary={false} />

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
      <Link to="/login">
        <span role="img" aria-label="heart">
          💔
        </span>
      </Link>
      <span role="img" aria-label="setting">
        ⚙️
      </span>
    </Navspan>
  </Navdiv>
);

export default Navigator;

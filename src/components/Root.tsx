import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../style/my-theme';
import GlobalStyles from '../style/GlobalStyle';
import Router from './Router';

const Root: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
);

export default Root;

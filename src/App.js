import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Register from './views/Register';

import { Container } from './components/Container';

import theme from './theme';

import './App.css';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Container>
          <Register />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

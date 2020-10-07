import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Register from './views/Register';

import { Container } from './components/Container';

import store from './store';
import theme from './theme';

import './App.css';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container>
            <Register />
          </Container>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;

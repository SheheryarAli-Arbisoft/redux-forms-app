import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Register from './views/Register';

import theme from './theme';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { StylesProvider  } from '@material-ui/core/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StylesProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@emotion/react';
// import { theme } from '../basic_mui/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
   
    </ThemeProvider> */}
    <App />
  </React.StrictMode>
);



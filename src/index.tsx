import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { api } from './services/films';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </StrictMode>,
);

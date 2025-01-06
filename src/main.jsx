import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1777fb'
    },
    danger: {
      main: '#ff5f59'
    },
    gray: {
      main: '#acacac'
    },
    dark: {
      main: "#324356"
    }
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

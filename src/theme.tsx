// src/theme.tsx
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3918',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    subtitle1: {
      fontSize: '1.5rem',
      fontFamily: 'Roboto',
    },
  },
};
const theme = createTheme({ ...themeOptions});

export default theme;

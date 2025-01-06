import { createTheme } from '@mui/material/styles';
import commonThemeProperties from './commonProperties';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#16151c',
      paper: '#1e1d24',
    },
    text: {
      primary: '#d9e1e1',
      secondary: '#a2a1a8',
    },
    primary: {
      main: '#7152f3',
    },
    secondary: {
      main: '#a3d139',
    },
  },
  ...commonThemeProperties,
});

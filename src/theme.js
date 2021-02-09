import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F7567C',
    },
    secondary: {
      main: '#99E1D9',
    },
    error: {
      main: '#d62828',
    },
    background: {
      default: '#FCFCFC',
    },
  },
});

export default theme;
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4f9cb1',
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
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f879b',
    },
    secondary: {
      main: '#f77f00',
    },
    error: {
      main: '#d62828',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
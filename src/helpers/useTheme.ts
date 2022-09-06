import { ThemeOptions } from '@mui/material/styles/createTheme';
import { PaletteOptions } from '@mui/material';

export const useTheme: ThemeOptions = ({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
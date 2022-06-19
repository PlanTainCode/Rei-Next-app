import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subtitle1: 'h4',
            subtitle2: 'h5',
            body1: 'span',
            body2: 'p',
          },
        },
      },
    },
  });
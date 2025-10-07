import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          transform: 'translate(14px, 7px) scale(1)',
          color: '#4d3821',
        },
        shrink: {
          transform: 'translate(14px, -9px) scale(0.7)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#d4b68b',
          borderRadius: '4px',
          padding: '0px !important',
        },
        input: {
          padding: '6px !important',
        },
      },
    },
  },
});

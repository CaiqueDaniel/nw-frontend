import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Trajan Pro',
      color: '#c5bdab',
    },
    h1: {
      fontSize: '45px',
      textShadow: '2px 2px 6px black',
      '-webkit-text-stroke': '1px #4d3821',
    },
    h2: {
      fontSize: '32px',
      '-webkit-text-stroke': '0.6px #4d3821',
    },
  },
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

import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#E35DA2',
    },
    secondary:{
      main: '#DD6FA9',
  },
  third:{
   main:'#1E1A3D'
  },
   fourth:{
    main: '#ff2d96',
   },
   fifth:{
    main: '#A570BE'
   }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default Theme;

'use client'
import { createTheme } from "@mui/material";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: 'light',
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { severity: 'info' },
                style: {
                  backgroundColor: '#60a5fa',
                },
              },
            ],
          },
        },
      },
    },
  });
  


  export default theme;
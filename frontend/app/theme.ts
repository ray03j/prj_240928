"use client"

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4b0082",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: 'gray', // disabled 状態の文字色を指定
          },
        },
      },
    },
  },
})
'use client'
import { ThemeProvider } from "@mui/system";
import { ReactNode, useState, useEffect } from "react";
import { lightTheme } from "@/src/theme/themes";
import { CssBaseline, Skeleton, Theme } from "@mui/material";
import Container from '@mui/material/Container';


function ThemeWrapper({ children }: {
  children: ReactNode
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container fixed sx={{
        py: 1
      }}>
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider >
  )
}

export default ThemeWrapper
'use client'
import { ReactNode, useState, useEffect } from "react";

import Container from '@mui/material/Container';


function MainContentContainer({ children }: {
  children: ReactNode
}) {
  return (
    <Container fixed sx={{
      py: 1
    }}>
      {children}
    </Container>
  )
}

export default MainContentContainer
'use client'
import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

function DangerButton({ children }: {
  children: ReactNode
}) {
  return (
    <Button
      color='error'
      variant='contained'
    >
      {children}
    </Button>
  )
}

export default DangerButton;
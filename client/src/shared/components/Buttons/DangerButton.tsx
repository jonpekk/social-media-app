'use client'
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';

function DangerButton(props: ButtonProps) {
  return (
    <Button
      color='error'
      variant='contained'
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default DangerButton;
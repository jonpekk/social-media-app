'use client'
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

function PrimaryButton(props: ButtonProps) {
  return (
    <Button
      variant='contained'
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default PrimaryButton
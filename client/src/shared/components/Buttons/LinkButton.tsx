'use client'
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

function LinkButton(props: ButtonProps) {
  return (
    <Button
      variant='text'
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default LinkButton
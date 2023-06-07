'use client'
import { Button } from "@mui/material";
import { ReactNode } from "react";

function PrimaryButton({ children }: {
  children: ReactNode
}) {
  return (
    <Button
      variant='contained'
    >
      Primary Action
    </Button>
  )
}

export default PrimaryButton
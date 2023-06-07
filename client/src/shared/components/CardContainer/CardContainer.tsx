'use client'
import { ReactNode } from "react"
import { Card } from "@mui/material"
import { containerPadding } from "@/src/theme/utils/spacing"

function CardContainer({ children }: {
  children: ReactNode
}) {
  return (
    <Card sx={{
      ...containerPadding,
      minHeight: '90vh'
    }}>
      {children}
    </Card>
  )
}

export default CardContainer
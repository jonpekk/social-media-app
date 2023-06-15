'use client'
import { Box, Container, Typography, Avatar } from "@mui/material"

const footerContainer = {
  backgroundColor: 'primary.main',
  color: 'secondary.main'
}

const footerBodyContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: {
    xs: 2,
    md: 5
  },
}

function Footer() {
  return (
    <Box sx={footerContainer}>
      <Container sx={footerBodyContainer}>
        <Typography component='p'>
          App created by Jon Pekkarinen @jonpekk
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
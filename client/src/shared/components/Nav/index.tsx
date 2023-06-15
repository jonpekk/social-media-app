'use client'
import { Box, Container, Typography, Avatar } from "@mui/material"

const navContainer = {
  backgroundColor: 'primary.main',
  color: 'secondary.main'
}

const navBodyContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 50,
  px: {
    xs: 2,
    md: 5
  },
}

const mainHeader = {
  fontSize: 20,
  fontWeight: 700
}

function Nav() {
  //Will need to replace this nav with a drawer. Should use conditional rendering in the container and make the contents one component
  // Example of the menu I am building https://mui.com/material-ui/react-menu/
  return (
    <Box sx={navContainer}>
      <Container sx={navBodyContainer}>
        <Typography component='h1' sx={mainHeader}>
          pSocial
        </Typography>
        <Avatar>X</Avatar>
      </Container>
    </Box>
  )
}

export default Nav
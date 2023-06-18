'use client'
import { Box, Container, Typography, Avatar } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"
import LinkButton from "../Buttons/LinkButton"

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

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0()

  console.log(isAuthenticated)

  return (
    <Box sx={navContainer}>
      <Container sx={navBodyContainer}>
        <Typography component='h1' sx={mainHeader}>
          pSocial
        </Typography>
        {
          isAuthenticated ?
            <LinkButton color="secondary" onClick={() => logout()}>Logout</LinkButton> :
            <LinkButton color="secondary" onClick={() => loginWithRedirect()}>Login</LinkButton>
        }
        {/* <Avatar>X</Avatar> */}
      </Container>
    </Box>
  )
}

export default Nav
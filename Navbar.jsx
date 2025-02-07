import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
})
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar> Navbar</Toolbar>
     
    </AppBar>
  )
}

export default Navbar


import React, { useState } from 'react'
import  Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import  Avatar from '@mui/material/Avatar'
import  InputBase from '@mui/material/InputBase'
import {styled} from '@mui/material'
import  Toolbar from '@mui/material/Toolbar'
import  Typography from '@mui/material/Typography'
import  Menu from '@mui/material/Menu'
import  MenuItem from '@mui/material/MenuItem'
import FacebookIcon from '@mui/icons-material/Facebook';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationIcons from '@mui/icons-material/Notifications';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",

}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>facebook </Typography>
        <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar><InputBase placeholder='search...' /></SearchBar>
        <Icons>
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationIcons />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt="profile pic" src=""
            onClick={e => setOpen(true)} />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} alt="profile pic" src=""
          />
          <Typography> User</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button" 
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}

export default Navbar
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Header.scss'
import Logo from 'components/Logo/Logo'


const pages = ['Home',  'Adventure', 'Travel', 'Discovery', 'History'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className='app-bar'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Logo/>
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent:'flex-end'}}}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}></MenuItem>
              ))}
            </Menu>
          </Box>
         <Box sx={{ flexGrow: 1, display: { sm: 'none', md: 'flex', justifyContent: 'flex-end', gap: '30px'}}}>
            {pages.map((page) => (
              <Button className='icon-item'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex'}}
              >
                {page}
              </Button>
            ))}
          </Box>
         </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useAppStore } from '../../AppStore';


const AppBar = styled(MuiAppBar, {
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function App_Bar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const updateOpen = useAppStore((state)=> state.updateOpen);
  const dopen = useAppStore((state)=> state.dopen);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} sx={{backgroundColor: "#ffffff" , color:"#2f2f2f"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>updateOpen(!dopen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          
            Online Education Service
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}











// import React from 'react'

// const App_Bar = () => {
//   return (
//     <>
// {/* <!-- Navbar --> */}
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   {/* <!-- Container wrapper --> */}
//   <div class="container-fluid">
//     {/* <!-- Toggle button --> */}
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-mdb-toggle="collapse"
//       data-mdb-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <i class="fas fa-bars"></i>
//     </button>

//     {/* <!-- Collapsible wrapper --> */}
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       {/* <!-- Navbar brand --> */}
//       <a class="navbar-brand mt-2 mt-lg-0" href="#">
//         <img
//           src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//           height="15"
//           alt="MDB Logo"
//           loading="lazy"
//         />
//       </a>
//       {/* <!-- Left links --> */}
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link" href="#">Dashboard</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Team</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Projects</a>
//         </li>
//       </ul>
//       {/* <!-- Left links --> */}
//     </div>
//     {/* <!-- Collapsible wrapper --> */}

//     {/* <!-- Right elements --> */}
//     <div class="d-flex align-items-center">
//       {/* <!-- Icon --> */}
//       <a class="text-reset me-3" href="#">
//         <i class="fas fa-shopping-cart"></i>
//       </a>

//       {/* <!-- Notifications --> */}
//       <div class="dropdown">
//         <a
//           class="text-reset me-3 dropdown-toggle hidden-arrow"
//           href="#"
//           id="navbarDropdownMenuLink"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <i class="fas fa-bell"></i>
//           <span class="badge rounded-pill badge-notification bg-danger">1</span>
//         </a>
//         <ul
//           class="dropdown-menu dropdown-menu-end"
//           aria-labelledby="navbarDropdownMenuLink"
//         >
//           <li>
//             <a class="dropdown-item" href="#">Some news</a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">Another news</a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">Something else here</a>
//           </li>
//         </ul>
//       </div>
//       {/* <!-- Avatar --> */}
//       <div class="dropdown">
//         <a
//           class="dropdown-toggle d-flex align-items-center hidden-arrow"
//           href="#"
//           id="navbarDropdownMenuAvatar"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img
//             src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//             class="rounded-circle"
//             height="25"
//             alt="Black and White Portrait of a Man"
//             loading="lazy"
//           />
//         </a>
//         <ul
//           class="dropdown-menu dropdown-menu-end"
//           aria-labelledby="navbarDropdownMenuAvatar"
//         >
//           <li>
//             <a class="dropdown-item" href="#">My profile</a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">Settings</a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">Logout</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     {/* <!-- Right elements --> */}
//   </div>
//   {/* <!-- Container wrapper --> */}
// </nav>
// {/* <!-- Navbar --> */}

//     </>
//   )
// }

// export default App_Bar
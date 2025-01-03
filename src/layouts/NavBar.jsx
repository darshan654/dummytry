import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { InputBase, SnackbarContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Paper from '@mui/material/Paper';
import data from '../assets/destination.json';
import SearchBarResult from '../components/SearchBarResult';
import Snackbar from '@mui/material/Snackbar';



const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();


  const [searchValue, setSearchValue] = React.useState();

  const [searchArray, setsearchArray] = React.useState([]);
  const [showResult, setshowResult] = React.useState(false);
  const [open, setopen] = React.useState(false);


  // function to search through array of cities
  const searchCity = () => {
    // if (!searchValue) {
    //   setopen(true)
    // }else{
    
      console.log("will search for ", searchValue);

      let searchTerm = searchValue?.toLowerCase();
      // to get the array matching the word
      let arr = data.filter((cities) => cities.name.toLowerCase().includes(searchTerm));
      setsearchArray(arr)
  
      if (searchArray) {
        setshowResult(true);
      }
      console.log(' array =  ', arr);
  
    // }

  }

  const handleNavigate = (path) => {
    console.log(path);

    navigate(`/${path}`)

  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    console.log(data);


  }, []);


  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Destination can't be Empty."
      />
      {showResult && <SearchBarResult searchArray={searchArray} />}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* left logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AirplanemodeActiveIcon />
            </Typography>

            {/* menu  */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={() => handleNavigate(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', gap: '20px' }}>

              {/* right search bar */}
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter a destination or keyword"
                  inputProps={{ 'aria-label': 'Enter a destination or keyword' }}
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <IconButton onClick={searchCity} type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="s" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;

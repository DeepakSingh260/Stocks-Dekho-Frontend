import { AccountCircle } from '@mui/icons-material';
import { AppBar, Avatar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import Search from './Search';
import Sidebar from './Slidebar';

const NavbarHome = () => {
  const [isOpen, setOpen] = useState(false);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const LoggedInComponent = () => {
    return (
      <IconButton component={Link} to="/profile">
        <Avatar
          style={{ width: 40, height: 40 }}
          src={user?.photoURL ? user.photoURL.toString() : ''}
        />
      </IconButton>
    );
  };

  const RenderComponent = () => {
    return (
      <>
        {user ? (
          <LoggedInComponent />
        ) : (
          <IconButton
            size="small"
            variant="contained"
            component={Link}
            to="/login"
            sx={{
              backgroundColor: 'linear-gradient(55deg,#73b9ff,#73b9ff20)'
            }}>
            <AccountCircle fontSize="large" color="info" />
          </IconButton>
        )}
      </>
    );
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff40)',
          backdropFilter: 'blur(5px)'
        }}>
        <Button component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
          <Typography variant="h4" fontWeight="bold" textTransform="none" fontFamily="Righteous">
            StoxDekho
          </Typography>
        </Button>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3
          }}>
          <Stack direction="row">
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </Stack>
          <Search />
          <RenderComponent />
        </Toolbar>
        <Sidebar open={isOpen} onClose={() => setOpen(false)} />
      </AppBar>
    </>
  );
};

export default NavbarHome;

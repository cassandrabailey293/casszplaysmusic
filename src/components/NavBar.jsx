import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { label: 'About', id: 'about' },
  { label: 'Social', id: 'social' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
];

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'rgba(13, 13, 13, 0.88)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(200, 164, 90, 0.15)',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        {/* Brand name */}
        <Typography
          variant="h6"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            flexGrow: 1,
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            letterSpacing: '0.15rem',
            color: '#f0ece4',
            cursor: 'pointer',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            textTransform: 'uppercase',
          }}
        >
          Cass Zimmerman
        </Typography>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
          {sections.map(({ label, id }) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                color: '#c8c0b0',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.08em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                '&:hover': { color: '#c8a45a' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Mobile nav */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{ color: '#f0ece4' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { bgcolor: '#1a1a1a', color: '#f0ece4' } }}
          >
            {sections.map(({ label, id }) => (
              <MenuItem
                key={id}
                onClick={() => scrollTo(id)}
                sx={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

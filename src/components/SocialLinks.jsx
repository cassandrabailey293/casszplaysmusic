import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// Update each href with your real profile URL.
const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cass.zplaysmusic',
    icon: <InstagramIcon />,
    color: '#E1306C',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@casszplaysmusic',
    icon: (
      // Simple TikTok wordmark icon (SVG)
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
    color: '#00F2EA',
    bg: '#ffffffff',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCegW5Za1rOCpWTXm7Xpi7EQ',
    icon: <YouTubeIcon />,
    color: '#FF0000',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/6D8czb82WcWY38PSfPXqJm?si=52TFSv2dQ5ikvezmjhSf3Q',
    icon: (
      // Spotify logo SVG
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.559 17.328a.75.75 0 0 1-1.03.248c-2.828-1.726-6.39-2.116-10.583-1.159a.75.75 0 0 1-.334-1.462c4.588-1.045 8.523-.596 11.699 1.341a.75.75 0 0 1 .248 1.032zm1.482-3.297a.937.937 0 0 1-1.288.308c-3.237-1.99-8.168-2.566-11.995-1.404a.937.937 0 0 1-.543-1.79c4.376-1.327 9.815-.683 13.518 1.6a.938.938 0 0 1 .308 1.286zm.127-3.432C15.53 8.374 9.421 8.17 5.88 9.25a1.125 1.125 0 0 1-.651-2.15c4.09-1.24 10.887-1.002 15.184 1.607a1.125 1.125 0 1 1-1.145 1.939z" />
      </svg>
    ),
    color: '#1DB954',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/cassandra-zimmerman/1787497290',
    icon: <MusicNoteIcon />,
    color: '#FA2D48',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/casszplaysmusic',
    icon: <FacebookIcon />,
    color: '#1877F2',
  },
];

export default function SocialLinks() {
  return (
    <>
      <h2 className="section-title">Find Me Online</h2>
      <hr className="section-divider" />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {socials.map(({ label, href, icon, color }) => (
          <Button
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={icon}
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.06em',
              textTransform: 'none',
              fontSize: '0.95rem',
              px: 2.5,
              py: 1,
              '&:hover': {
                backgroundColor: `${color}18`,
                borderColor: color,
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </>
  );
}

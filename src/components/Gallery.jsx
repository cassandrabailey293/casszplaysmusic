import Box from '@mui/material/Box';

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD YOUR OWN MEDIA
//
// Images:
//   1. Drop your .jpg / .png files into src/assets/
//   2. Import them at the top of this file:
//        import myPhoto from '../assets/my-photo.jpg'
//   3. Add an entry below: { type: 'image', src: myPhoto, alt: 'Description' }
//
// Short video clips:
//   1. Drop your .mp4 files into the public/clips/ folder
//   2. Add an entry: { type: 'video', src: '/clips/my-clip.mp4', alt: 'Description' }
//      (paths in public/ are served from the site root)
// ─────────────────────────────────────────────────────────────────────────────

// Placeholder music/guitar images from Unsplash (replace with your own photos)
const mediaItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format',
    alt: 'Guitar on stage',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&auto=format',
    alt: 'Performing live',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format',
    alt: 'Acoustic guitar',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format',
    alt: 'Recording microphone',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format',
    alt: 'Stage performance',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&auto=format',
    alt: 'Concert crowd',
  },
  // ── Video placeholder ──
  // Uncomment and update src once you add a clip to public/clips/
  // {
  //   type: 'video',
  //   src: '/clips/live-set.mp4',
  //   alt: 'Live performance clip',
  // },
];

export default function Gallery() {
  return (
    <>
      <h2 className="section-title">Gallery</h2>
      <hr className="section-divider" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 1.5,
        }}
      >
        {mediaItems.map((item, i) =>
          item.type === 'video' ? (
            <Box
              key={i}
              sx={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: 1,
                bgcolor: '#1a1a1a',
              }}
            >
              <video
                src={item.src}
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                aria-label={item.alt}
              />
            </Box>
          ) : (
            <Box
              key={i}
              sx={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: 1,
                bgcolor: '#1a1a1a',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                '&:hover': { transform: 'scale(1.02)', opacity: 0.9 },
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </Box>
          )
        )}
      </Box>
    </>
  );
}

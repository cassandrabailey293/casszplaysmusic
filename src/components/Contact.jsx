import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// ── Update these with your real contact details ──
const EMAIL = 'booking@casszimmerman.com';
const PHONE = '+1 (703) 244-8122';

export default function Contact() {
  return (
    <>
      <h2 className="section-title">Contact</h2>
      <hr className="section-divider" />
      <p style={{ margin: '0 0 2rem 0', fontSize: '1rem', color: '#888', maxWidth: '560px' }}>
        Got a show, event, or project that needs something special? 
        <br></br>
        Let's make it happen.
      </p>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <EmailIcon sx={{ color: '#c8a45a', fontSize: '1.4rem' }} />
          <a
            href={`mailto:${EMAIL}`}
            style={{
              fontSize: '1.1rem',
              color: '#f0ece4',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#c8a45a')}
            onMouseLeave={(e) => (e.target.style.color = '#f0ece4')}
          >
            {EMAIL}
          </a>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <PhoneIcon sx={{ color: '#c8a45a', fontSize: '1.4rem' }} />
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            style={{
              fontSize: '1.1rem',
              color: '#f0ece4',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#c8a45a')}
            onMouseLeave={(e) => (e.target.style.color = '#f0ece4')}
          >
            {PHONE}
          </a>
        </Box>
      </Box>
    </>
  );
}

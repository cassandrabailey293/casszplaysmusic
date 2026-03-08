export default function About() {
  return (
    <>
      <h2 className="section-title">About</h2>
      <hr className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '720px' }}>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          Cass Zimmerman is a singer-songwriter and guitarist based in [City, State]. With a sound
          rooted in [genre — e.g., indie rock / folk / alternative], Cass writes music that is equal
          parts raw and refined — honest lyrics layered over guitar-driven arrangements that stay
          with you long after the last chord fades.
        </p>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          [Add your story here — where you're from, how you got started, what drives your music,
          notable performances or releases, and what you're working on now.]
        </p>
        <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontStyle: 'italic', lineHeight: 1.8 }}>
          Available for live performances, collaborations, and press inquiries.
        </p>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <h2 className="section-title">About</h2>
      <hr className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '720px' }}>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          Cass Zimmerman is a Denver-based singer-songwriter, guitarist, and live performance host with roots in rock, alternative, and punk. Whether she's performing original music, leading a room through a night of crowd-favorite hits spanning the 90s through today, or hosting an open mic, karaoke night, or live event — Cass brings energy, warmth, and a genuine love of connecting people through music. 
        </p>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          For Cass, music has always been about more than the songs. It's about community, self-expression, and the moments that happen when people share a room and feel something together.
        </p>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          Currently collaborating with various bands and musicians on multiple projects — stay tuned for what's coming next.
        </p>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#c8c0b0', lineHeight: 1.8 }}>
          <b>Upcoming Performances:</b>
          <ul>
            <li>4/25/26 4PM @ Old 121 (Lakewood)</li>
            <li>7/11/26 4PM @ Old 121 (Lakewood)</li>
          </ul>
        </p>
        <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontStyle: 'italic', lineHeight: 1.8 }}>
          Available for live performances, event hosting, DJ sets, collaborations, and press inquiries.
        </p>
      </div>
    </>
  );
}

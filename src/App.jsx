import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import heroImage from './assets/cassz_sittingwithguitar.jpg'

function App() {
  return (
    <div className="epk">
      <NavBar />

      {/* Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay" />
        <img src={heroImage} alt="Cass Zimmerman" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-name">Cass Zimmerman</h1>
          <p className="hero-tagline">Singer &middot; Songwriter &middot; Guitarist</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Social Links */}
      <div id="social" className="section-full">
        <div className="section-inner">
          <SocialLinks />
        </div>
      </div>

      {/* Gallery */}
      <section id="gallery" className="section">
        <Gallery />
      </section>

      {/* Contact */}
      <div id="contact" className="section-full">
        <div className="section-inner">
          <Contact />
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Cass Zimmerman. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

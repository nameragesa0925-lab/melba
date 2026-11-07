import { Link } from 'react-router-dom'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'f' },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: '◎' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'in' },
  { name: 'YouTube', href: 'https://www.youtube.com/', icon: '▶' },
  { name: 'TikTok', href: 'https://www.tiktok.com/', icon: '♪' },
  { name: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Melba+Printing+Publishing+and+Packaging', icon: '⌖' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>© 2026 All Rights reserved. Melba Printing Publishing and Packaging s.c</span>
        </div>

        <div className="footer-nav">
          <Link to="/">Melba</Link>
          <Link to="/printing">Printing</Link>
          <Link to="/publishing">Publishing</Link>
          <Link to="/packaging">Packaging</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="social-links" aria-label="Social media links">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              className="social-link"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              title={name}
            >
              <span aria-hidden="true">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

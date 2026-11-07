import { Link, NavLink } from 'react-router-dom'
import melbaLogo from '../../image/melbalogo1.jpg'

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'Printing', to: '/printing' },
  { title: 'Publishing', to: '/publishing' },
  { title: 'Packaging', to: '/packaging' },
  { title: 'Gallery', to: '/gallery' },
  { title: 'Contact', to: '/contact' },
]

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg container">
        <Link className="navbar-brand brand-logo text-white" to="/">
          <div className="brand-mark" aria-label="MELBA logo" role="img">
            <img src={melbaLogo} alt="MELBA logo" className="brand-mark-image" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink end={item.to === '/'} className="nav-link" to={item.to}>
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-primary-custom" to="/contact">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

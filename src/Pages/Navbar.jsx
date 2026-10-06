import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import WhatsAppCTA from '../components/WhatsAppCTA'
import CallCTA from '../Components/CallCTA'
const Nav = () => {
    const links = [
        { name: 'home', to: '/' },
        { name: 'about', to: '/about' },
        { name: 'package', to: '/package' },
        { name: 'contact', to: '/contact' },
    ]
    const [open, setOpen] = useState(false)

  return (
    <div>
          <header className="hm-nav-wrap" id="home">
              <nav className="hm-nav">
                  <div className="hm-lg">
                      <img src="imagesix.webp" alt="DJ Gorila logo" className="hm-logo" />
                      <span className="hm-lg-name">
                          <span className="hm-dj">DJ</span>
                          <span className="hm-gorila">Gorila</span>
                      </span>
                  </div>

                  <ul className={`hm-links ${open ? 'hm-open' : ''}`}>
                      {links.map((l) => (
                          <li key={l.name}>
                            <Link to={l.to} onClick={()=> setOpen(false)}>{l.name}</Link>
                          </li>
                      ))}
                  </ul>

                  <div className="hm-actions">
                  
                      <WhatsAppCTA/>
                      <CallCTA/>

                      <button
                          className="hm-burger"
                          aria-label="Toggle menu"
                          aria-expanded={open}
                          onClick={() => setOpen(!open)}
                      >
                          <i className={open ? 'ri-close-line' : 'ri-menu-3-line'}></i>
                      </button>
                  </div>
              </nav>
          </header>
    </div>
  )
}

export default Nav
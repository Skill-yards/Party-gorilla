// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar



import './Packages.css'
import { Link } from 'react-router-dom'
const Footer = () => {
      const  message = "Hi! I would like to know more about your services."
      const whatsappURL = `https://wa.me/${916397713425}?text=${encodeURIComponent(
        message
      )}`;

    const quickLinks = [
        { name: 'Home', to: '/home' },
        { name: 'About', to: '/about' },
        { name: 'Package', to: '/package' },
        { name: 'Contact', to: '/contact' },
    ]

    const payments = [
        { icon: 'ri-qr-code-line', label: 'UPI / QR' },
        { icon: 'ri-bank-line', label: 'Bank transfer' },
        { icon: 'ri-money-rupee-circle-line', label: 'Cash' },
    ]

  return (
    <div>
          <footer className="ft-footer" id="contact">
              <div className="ft-top">
                  {/* Brand */}
                  <div className="ft-col ft-brand">
                      <div className="ft-logo">
                          <img src="logo.webp" alt="DJ Gorila" />
                          <span>
                              <b>DJ</b> Gorila
                          </span>
                      </div>
                      <p>
                          Fun, interactive and high-energy gorilla mascot for weddings,
                          birthdays and every celebration.
                      </p>
                      <div className="ft-social">
                          <a href="https://www.instagram.com/party_gorillas?stkn=MXAxamkwamZvcmlxaw==" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
                          <a href="https://youtube.com/@abhishekverma7830-h9x?si=DJ5QnS52Ae4RffoH" aria-label="YouTube"><i className="ri-youtube-fill"></i></a>
                          <a href="https://www.facebook.com/profile.php?id=61594537499927&mibextid=ZbWKwL" aria-label="Facebook"><i className="ri-facebook-circle-fill"></i></a>
                          <a href={whatsappURL} aria-label="WhatsApp"><i className="ri-whatsapp-fill"></i></a>
                      </div>
                  </div>

                  {/* Links */}
                  <div className="ft-col">
                      <h4>Quick links</h4>
                      <ul>
                          {quickLinks.map((l) => (
                              <li key={l.name}><Link to={l.to}>{l.name}</Link></li>
                          ))}
                      </ul>
                  </div>

                  {/* Contact */}
                  <div className="ft-col">
                      <h4>Contact</h4>
                      <ul>
                          <li><i className="ri-phone-fill"></i> +91 6397713425</li>
                          <li><i className="ri-whatsapp-fill"></i> +91 6397713425</li>
                          <li><i className="ri-mail-fill"></i> a62711070@gmail.com</li>
                          <li><i className="ri-map-pin-2-fill"></i> Nandlalpur, Tedi Baghiya, Tedi Bagiya, Agra, Uttar Pradesh 282006</li>
                      </ul>
                  </div>

                  {/* Payment */}
                  <div className="ft-col">
                      <h4>Payment and booking</h4>
                      <div className="ft-pay">
                          {payments.map((p) => (
                              <span key={p.label}>
                                  <i className={p.icon}></i>
                                  {p.label}
                              </span>
                          ))}
                      </div>
                      <p className="ft-terms">
                          <i className="ri-secure-payment-line"></i>
                          Advance payment confirms your booking. Balance is paid on the event day.
                      </p>
                  </div>
              </div>

              <div className="ft-bottom">
                  <span>© {new Date().getFullYear()} DJ Gorila. All rights reserved.</span>
                  <span>Book your date early, slots fill fast.</span>
              </div>
          </footer>
    </div>
  )
}

export default Footer
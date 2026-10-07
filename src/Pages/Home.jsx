// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar


import './Home.css'
import { Link } from 'react-router-dom'
import Events from './Event'
import Service from './Service'
// import WhatsAppCTA from '../components/WhatsAppCTA'
import { FaWhatsapp } from "react-icons/fa";
import { phoneNumber } from "../Contact_details.js";
const features = [
  { icon: 'ri-body-scan-line', text: 'Fun & interactive performance' },
  { icon: 'ri-suitcase-line', text: 'Perfect for all types of events' },
  { icon: 'ri-shield-check-line', text: 'Safe and reliable' },
  { icon: 'ri-user-heart-line', text: 'Perfect for everyone' },
]

const Home = () => {

    const message =
    "Hi! I would like to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <header className='subHeader'>
          <span className='mobIl'>
          <p>+91 6397713425</p>
          </span>
          <span className='add'>
          <p>Address: Nandlalpur, Tedi Baghiya, Tedi Bagiya, Agra, Uttar Pradesh 282006</p>
          </span>
      </header>
      <section className="hm-hero" id="about">
        <div className="hm-hero-text">
          <div className="hm-badge">
            <span className="hm-crown">
              <i className="ri-vip-crown-fill"></i>
            </span>
              Book your party gorilla in Agra          </div>

          <h2>create unforgettable memories</h2>
          <h1>GORILLA MASCOT FOR PARTY IN AGRA</h1>

          <p className="hm-desc">
            Make your birthday, wedding or any celebration extra special with our fun, interactive and high-energy party gorilla. Gorilla dance, mascot entertainment and DJ vibes, all in one place.
          </p>

          <div className="hm-btns">
             <a className="  bg-[#FFD42A] text-[#111] hover:bg-amber-500 hm-btn hm-btn-line"
                          href={whatsappURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          
                        >
                          <FaWhatsapp className="text-[17px]" />
            
                          <span className=" sm:inline">
                            WhatsApp Us
                          </span>
                        </a>




            <Link to="/package" className="hm-btn hm-btn-line">
              View package <i className="ri-suitcase-line"></i>
            </Link>
          </div>
        </div>

        <div className="hm-hero-img">
          <div className="hm-cards">
            <img src="imagenine.webp" alt="Gorila mascot at a party" className="hm-c1" />
            <img src="imageseven.webp" alt="Gorila mascot dancing" className="hm-c2" />
            <img src="imageeight.webp" alt="Gorila mascot with kids" className="hm-c3" />
          </div>
        </div>
      </section>

      <section className="hm-strip">
        <div className="hm-track">
          {[0, 1].map((set) => (
            <div className="hm-group" key={set} aria-hidden={set === 1}>
              {features.map((f) => (
                <div className="hm-feat" key={`${set}-${f.text}`}>
                  <i className={f.icon}></i>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>


      <Events/>

      <Service/>

   
    </>
  )
}

export default Home
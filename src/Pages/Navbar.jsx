// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar


import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from "../Contact_details.js";


const Nav = () => {
  const links = [
    { name: "home", to: "/" },
    { name: "about", to: "/about" },
    { name: "package", to: "/package" },
    { name: "contact", to: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const message =
    "Hi! I would like to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      <header className="hm-nav-wrap" id="home">
        <nav className="hm-nav">

          {/* LOGO */}
          <div className="hm-lg">
            <img
              src= "logo.webp"
              alt="DJ Gorila logo"
              className="hm-logo"
            />

            <span className="hm-lg-name">
              <span className="hm-dj">DJ</span>
              <span className="hm-gorila">Gorila</span>
            </span>
          </div>


          {/* DESKTOP LINKS */}
          <ul className={`hm-links ${open ? "hm-open" : ""}`}>
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>


          {/* ACTIONS */}
          <div className="hm-actions flex items-center gap-1 sm:gap-2">

            {/* WHATSAPP */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                w-[36px]
                h-[36px]

                sm:w-[150px]
                sm:h-[42px]

                rounded-full
                bg-[#FFD42A]
                text-[#111]

                text-[12px]
                font-semibold

                transition-all
                duration-200

                hover:scale-105
                hover:bg-[#f5c800]
                active:scale-95

                shrink-0
              "
            >
              <FaWhatsapp className="text-[17px]" />

              <span className="hidden sm:inline">
                WhatsApp Us
              </span>
            </a>


            {/* CALL */}
            <a
              href={`tel:${phoneNumber}`}
              aria-label="Call Us"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                w-[36px]
                h-[36px]

                sm:w-[150px]
                sm:h-[42px]

                rounded-full
                bg-[#292929]
                text-white

                text-[12px]
                font-semibold

                transition-all
                duration-200

                hover:scale-105
                hover:bg-[#1f1f1f]
                active:scale-95

                shrink-0
              "
            >
              <FaPhoneAlt className="text-[14px]" />

              <span className="hidden sm:inline">
                Call Us
              </span>
            </a>


            {/* MENU */}
            <button
              className="hm-burger shrink-0"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <i
                className={
                  open
                    ? "ri-close-line"
                    : "ri-menu-3-line"
                }
              ></i>
            </button>

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import WhatsAppCTA from "../components/WhatsAppCTA";
import CallCTA from "../components/CallCTA";
import contactImage from "../assets/contact_page_gorilla.png";
import { phoneNumber } from "../Contact_details.js";
import { email } from "../Contact_details.js";

const contactDetails = [
  {
    id: 1,
    icon: FaWhatsapp,
    title: phoneNumber,
    subtitle: "(WhatsApp / Call)",
  },
  {
    id: 2,
    icon: FaEnvelope,
    title: email,
    subtitle: "(Business Inquiries)",
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: " Nandlalpur, Tedi Baghiya, Tedi Bagiya, Agra, Uttar Pradesh 282006",
    subtitle: "(Birthdays, weddings & party events)",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/party_gorillas?stkn=MXAxamkwamZvcmlxaw==",
  },
  {
    id: 2,
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61594537499927&mibextid=ZbWKwL",
  },
  {
    id: 3,
    name: "X",
    icon: FaXTwitter,
    href: "#",
  },
  {
    id: 4,
    name: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com/@abhishekverma7830-h9x?si=DJ5QnS52Ae4RffoH",
  },
];




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hi Gorilla Vibes!

I would like to enquire about your services.

Name: ${formData.name}
WhatsApp Number: ${formData.phone}
Event Date: ${formData.eventDate || "Not specified"}

Message:
${formData.message || "No additional message."}
`;

    

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main
      id="contact"
      className="bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* =====================================================
          CONTACT HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[var(--color-surface)]">
        <div
          className="
            mx-auto
            grid
            min-h-[500px]
            max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-5
            py-14
            sm:px-8
            lg:grid-cols-2
            lg:gap-16
            lg:px-12
            lg:py-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            <p
              className="
                mb-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.25em]
                text-[var(--color-accent)]
                sm:text-xs
              "
            >
              GET IN TOUCH
            </p>

            <h1
              className="
                max-w-lg
                text-4xl
                font-black
                leading-[1.02]
                tracking-tight
                text-[var(--color-primary-dark)]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's Make Your Event
              <br />
              Unforgettable!
            </h1>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-[var(--color-text-muted)]
                sm:text-[15px]
                sm:leading-7
              "
            >
             Planning a birthday, wedding or party in Agra? Tell us about your event and we'll help you with the perfect gorilla entertainment, DJ and lighting setup. Questions, packages or a custom quote, we're just a message away!
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <WhatsAppCTA
                message="Hi! I'd like to know more about your Gorilla Vibes services."
                className="w-full sm:w-[145px]"
              >
                WhatsApp Us
              </WhatsAppCTA>

              <CallCTA className="w-full sm:w-[120px]">
                Call Us
              </CallCTA>
            </div>
          </div>

          {/* RIGHT IMAGE */}
<div className="w-full">
  <img
    src={contactImage}
    alt="Gorilla Vibes entertainer"
    className="
      h-auto
      w-full
      rounded-[6px]
      object-cover
    "
  />
</div>
         
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS + FORM
      ====================================================== */}
      <section className=" px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-10
          "
        >
          {/* LEFT - CONTACT DETAILS */}
          <div>
            <h2
              className="
                text-xl
                font-black
                text-[var(--color-primary-dark)]
                sm:text-2xl
              "
            >
              Contact Details
            </h2>

           <div className="mt-6 space-y-5">
  {contactDetails.map((detail) => {
    const Icon = detail.icon;

    return (
      <div
        key={detail.id}
        className="flex items-center gap-4"
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[var(--color-accent)]
            text-[var(--color-text)]
          "
        >
          <Icon className="text-sm" />
        </div>

        <div>
          <p className="text-sm font-bold text-[var(--color-text)]">
            {detail.title}
          </p>

          <p className="mt-0.5 text-[10px] text-[var(--color-text-muted)]">
            {detail.subtitle}
          </p>
        </div>
      </div>
    );
  })}
</div>

            {/* FOLLOW US */}
            <div
              className="
                mt-8
                rounded-[10px]
                bg-[var(--color-surface)]
                px-5
                py-5
                sm:max-w-[360px]
              "
            >
              <h3 className="text-sm font-bold text-[var(--color-text)]">
                Follow Us
              </h3>

              <div className="mt-5 flex items-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.name}
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        text-[var(--color-text)]
                        transition
                        duration-200
                        hover:-translate-y-1
                        hover:text-[var(--color-accent)]
                      "
                    >
                      <Icon className="text-[17px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div
            className="
              rounded-[10px]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-5
              shadow-[var(--shadow-soft)]
              sm:p-6
            "
          >
            <h2 className="text-xl font-black text-[var(--color-text)]">
              Send Us a Message
            </h2>

            <p
              className="
                mt-1
                text-[10px]
                leading-5
                text-[var(--color-text-muted)]
                sm:text-xs
              "
            >
              Fill out the form below and we'll get back to you on WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-4"
            >
              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[10px] font-semibold text-[var(--color-text)]"
                  >
                    Your Name <span className="text-[var(--color-accent)]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      h-10
                      w-full
                      rounded-[6px]
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface)]
                      px-3
                      text-xs
                      text-[var(--color-text)]
                      outline-none
                      transition
                      placeholder:text-[var(--color-text-muted)]
                      focus:border-[var(--color-accent)]
                      focus:ring-2
                      focus:ring-[var(--color-accent)]/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-[10px] font-semibold text-[var(--color-text)]"
                  >
                    Your WhatsApp Number{" "}
                    <span className="text-[var(--color-accent)]">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="
                      h-10
                      w-full
                      rounded-[6px]
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface)]
                      px-3
                      text-xs
                      text-[var(--color-text)]
                      outline-none
                      transition
                      placeholder:text-[var(--color-text-muted)]
                      focus:border-[var(--color-accent)]
                      focus:ring-2
                      focus:ring-[var(--color-accent)]/20
                    "
                  />
                </div>
              </div>

              {/* DATE */}
              <div>
                <label
                  htmlFor="eventDate"
                  className="mb-1.5 block text-[10px] font-semibold text-[var(--color-text)]"
                >
                  Event Date <span className="font-normal text-[var(--color-text-muted)]">(Optional)</span>
                </label>

                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="
                    h-10
                    w-full
                    rounded-[6px]
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-surface)]
                    px-3
                    text-xs
                    text-[var(--color-text)]
                    outline-none
                    transition
                    focus:border-[var(--color-accent)]
                    focus:ring-2
                    focus:ring-[var(--color-accent)]/20
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[10px] font-semibold text-[var(--color-text)]"
                >
                  Message{" "}
                  <span className="font-normal text-[var(--color-text-muted)]">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, package preference or any other details..."
                  className="
                    w-full
                    resize-none
                    rounded-[6px]
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-surface)]
                    px-3
                    py-3
                    text-xs
                    leading-5
                    text-[var(--color-text)]
                    outline-none
                    transition
                    placeholder:text-[var(--color-text-muted)]
                    focus:border-[var(--color-accent)]
                    focus:ring-2
                    focus:ring-[var(--color-accent)]/20
                  "
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  inline-flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--color-accent)]
                  px-5
                  text-xs
                  font-bold
                  text-[var(--color-text)]
                  transition
                  duration-200
                  hover:scale-[1.01]
                  hover:bg-[var(--color-accent-hover)]
                  active:scale-[0.98]
                "
              >
                <FaWhatsapp className="text-base" />
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
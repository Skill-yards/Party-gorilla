import { FaWhatsapp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import {phoneNumber}  from "../Contact_details.js";

const WhatsAppCTA = ({
  message = "Hi! I would like to know more about your services.",
  className = "",
  children = "WhatsApp Us",
}) => {
  

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        w-[150px]
        h-[42px]
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
        px-3
        `,
        className
      )}
    >
      <FaWhatsapp className="text-[17px]" />
      <span>{children}</span>
    </a>
  );
};

export default WhatsAppCTA;
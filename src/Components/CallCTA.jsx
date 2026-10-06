import { FaPhoneAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { phoneNumber } from "../Contact_details.js";
const CallCTA = ({
  className = "",
  children = "Call Us",
}) => {
 

  return (
    <a
      href={`tel:+${phoneNumber}`}
      className={twMerge(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        w-[150px]
        h-[42px]
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
        px-3
        `,
        className
      )}
    >
      <FaPhoneAlt className="text-[15px]" />
      <span>{children}</span>
    </a>
  );
};

export default CallCTA;
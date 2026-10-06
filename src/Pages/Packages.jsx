
import {useInView} from 'react-intersection-observer';


import WhatsAppCTA from "../components/WhatsAppCTA";
import CallCTA from "../components/CallCTA";

import heroImage from "../assets/packages-hero.jpg";


const packages = [
  {
    id: 1,
    name: "Gorilla Single",
    price: "₹6,000",
    image: 'image12.webp',
    description: "A fun gorilla appearance to make your celebration unforgettable.",
  },
  {
    id: 2,
    name: "Moscout Double",
    price: "₹10,000",
    image:'image15.webp',
    description: "Double the energy for bigger celebrations and events.",
  },
  {
    id: 3,
    name: "Haldi & Mehndi Program",
    price: "₹7,000",
    image:'image19.webp',
    description: "Bring extra fun and entertainment to your Haldi or Mehndi celebration.",
  },
  {
    id: 4,
    name: "Home Decoration",
    price: "₹10,000",
    detail: "For 3 Days",
    image:'image20.webp',
    description: "Beautiful home decoration setup for your special celebration.",
  },
  {
    id: 5,
    name: "DJ Sound – 8 Box",
    price: "₹10,000",
    image:heroImage,
    description: "Powerful DJ sound setup to keep your celebration going.",
  },
  {
    id: 6,
    name: "Girls for Flower Showering",
    price: "₹2,000",
    detail: "Per Girl",
    image:heroImage,
    description: "Make your special entrance and celebration even more memorable.",
  },
  {
    id: 7,
    name: "Birthday Party Decoration",
    price: "₹7,000",
    image: 'image14.webp',
    description: "A beautiful decoration setup designed for unforgettable birthdays.",
  },
  {
    id: 8,
    name: "Tent – 15 × 15 Feet",
    price: "₹4,000",
    image:heroImage,
    description: "15 × 15 feet tent setup for your event and celebration.",
  },
  {
    id: 9,
    name: "Coffee Machine",
    price: "₹2,500",
    detail: "With Labour",
    image:heroImage,
    description: "Coffee machine setup with labour for your event.",
  },
];

const Packages = () => {

  const {ref, inView} =  useInView({
    triggerOnce: true,
    threshold: 0.02
  })

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[#171717]">

{/* =====================================================
    HERO
====================================================== */}

<section
  className="
    relative
    isolate
    overflow-hidden
    bg-[var(--color-primary)]
    py-12
    sm:py-16
    lg:py-20
  "
>
  {/* =====================================================
      DESKTOP / TABLET HERO IMAGE
  ====================================================== */}

  <div className="absolute inset-0 hidden sm:block">
    <img
      src={heroImage}
      alt="Gorilla Vibes entertainment"
      className="
        h-full
        w-full
        object-cover
        object-center
      "
    />
  </div>

  {/* =====================================================
      MOBILE HERO IMAGE
  ====================================================== */}

  <div
    className="
      absolute
      inset-0
      sm:hidden
    "
  >
    <img
      src={heroImage}
      alt=""
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-[70%_center]
      "
    />

    {/* Dark overlay so text stays readable */}
    <div
      className="
        absolute
        inset-0
        bg-[var(--color-primary)]/65
      "
    />

    {/* Extra left-side darkness for text */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[var(--color-primary)]
        via-[var(--color-primary)]/80
        to-transparent
      "
    />
  </div>

  {/* =====================================================
      HERO CONTENT
  ====================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[500px]
      max-w-7xl
      items-center
      px-5
      sm:min-h-[480px]
      sm:px-8
      lg:min-h-[520px]
      lg:px-12
    "
  >
    <div
      className="
        max-w-2xl
        text-[var(--color-white)]
      "
    >

      {/* Eyebrow */}
      <p
        className="
          mb-3
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.3em]
          text-[var(--color-accent)]
          sm:mb-4
          sm:text-xs
          lg:text-sm
        "
      >
        OUR PACKAGES
      </p>

      {/* Heading */}
      <h1
        className="
          max-w-xl
          text-4xl
          font-black
          leading-[0.95]
          tracking-tight
          text-[var(--color-white)]
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        Choose The Perfect Package
      </h1>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-lg
          text-xs
          leading-5
          text-[var(--color-white)]/80
          sm:mt-5
          sm:text-sm
          sm:leading-6
          lg:mt-6
          lg:text-base
          lg:leading-7
        "
      >
        Bring unforgettable energy to your celebration with our
        entertaining gorilla appearances, interactive games and
        memorable moments.
      </p>

      {/* Buttons */}
      <div
        className="
          mt-5
          flex
          flex-col
          gap-2
          sm:mt-6
          sm:flex-row
          sm:items-center
          sm:gap-3
          lg:mt-8
        "
      >
        <WhatsAppCTA
          message="Hi! I'd like to know more about your Gorilla Vibes packages."
          className="w-full sm:w-[180px]"
        >
          WhatsApp Us
        </WhatsAppCTA>

        <a
          href="#packages"
          className="
            inline-flex
            h-[42px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[var(--color-secondary)]
            px-3
            text-[12px]
            font-semibold
            text-[var(--color-white)]
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[var(--color-secondary-hover)]
            active:scale-95
            sm:w-[180px]
          "
        >
          View Packages
        </a>
      </div>

    </div>
  </div>
</section>


      {/* =====================================================
          PACKAGES INTRO
      ====================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" id="packages">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#587363]">
              Choose Your Experience
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Pick the perfect package
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
              Whether you're planning a small birthday party or a large
              celebration, there's a Gorilla Vibes experience for you.
            </p>

          </div>


      
        {/* =================================================
    PACKAGE CARDS
================================================== */}
<div
  ref={ref}
  className={`
    mt-12
    grid
    grid-cols-3
    gap-2
    sm:gap-4
    lg:gap-6
    ${inView ? "animate__animated animate__fadeInUp" : ""}
  `}
>

  {packages.map((pkg) => (
   <article
  key={pkg.id}
  className="
    group
    relative
    overflow-hidden
    rounded-xl
    bg-[var(--color-surface)]
    shadow-[0_8px_25px_rgba(0,0,0,0.08)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_15px_35px_rgba(0,0,0,0.14)]
    ring-2
    ring-[var(--color-accent)]
    sm:rounded-2xl
    sm:ring-3
  "
>
  {/* Image */}
  <div className="relative aspect-square overflow-hidden">
    <img
      src={pkg.image}
      alt={`${pkg.name} - Gorilla Vibes`}
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/70 via-transparent to-transparent" />
  </div>

  {/* Content */}
  <div className="p-2.5 sm:p-4 lg:p-5">

    {/* Name */}
    <h3 className="
      text-[11px]
      font-black
      leading-tight
      text-[var(--color-text)]
      sm:text-base
      lg:text-lg
    ">
      {pkg.name}
    </h3>

    {/* Extra detail */}
    {pkg.detail && (
      <p className="
        mt-1
        text-[8px]
        font-semibold
        text-[var(--color-text-muted)]
        sm:text-[10px]
        lg:text-xs
      ">
        {pkg.detail}
      </p>
    )}

    {/* Price */}
    <p className="
      mt-2
      text-sm
      font-black
      text-[var(--color-primary)]
      sm:text-lg
      lg:text-xl
    ">
      {pkg.price}
    </p>

    {/* Description */}
    <p className="
      mt-2
      hidden
      text-xs
      leading-5
      text-[var(--color-text-muted)]
      sm:block
    ">
      {pkg.description}
    </p>

    {/* CTA */}
    <WhatsAppCTA
      message={`Hi! I'd like to book ${pkg.name} for my event.`}
      className="
        mt-3
        h-[32px]
        w-full
        text-[8px]
        sm:mt-4
        sm:h-[38px]
        sm:text-[10px]
        lg:h-[42px]
        lg:text-xs
      "
    >
      Book Now
    </WhatsAppCTA>

  </div>
</article>
  ))}

</div>

        </div>
      </section>


    

{/* =====================================================
    CUSTOM PACKAGE BANNER
====================================================== */}

<section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
  <div className="mx-auto max-w-7xl">

    <div
      className="
        flex flex-col gap-6
        rounded-[14px]
        bg-[var(--color-primary-dark)]
        px-5 py-5
        text-[var(--color-white)]
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]

        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:px-7
        sm:py-5

        lg:px-8
      "
    >

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Logo Placeholder */}
        <div
          className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[var(--color-accent)]
          "
        >
          <img
            src='https://placehold.co/80x80/FFD42A/14231F?text=GV'
            alt="Gorilla Vibes logo"
            className="h-full w-full object-cover"
          />
        </div>


        {/* Text */}
        <div>

          <h3 className="text-base font-bold leading-tight sm:text-lg">
            Need a custom package for your event?
          </h3>

          <p className="mt-1 text-xs leading-5 text-[var(--color-white)]/60 sm:text-sm">
            We'd be happy to create a package that fits your needs.
          </p>

        </div>

      </div>


      {/* RIGHT SIDE CTA */}

      <CallCTA className=" bg-[var(--color-success-soft)] text-[var(--color-text)] hover:bg-[var(--color-accent)]"/>

    </div>

  </div>
</section>
     

    </main>
  );
};

export default Packages;
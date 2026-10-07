// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar


import { FaArrowRight, FaCheck, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import CallCTA from "../Components/CallCTA";

import aboutHero from "../assets/cool_gorilla.webp";




// =====================================================
// PAST EVENT MEDIA
// Change type to "image" or "video" whenever needed.
// =====================================================

const pastEvents = [
  {
    id: 1,
    type: "image",
    src: 'image14.webp',
    poster: "",
    title: "Birthday Celebration",
    
  },
  {
    id: 2,
    type: "image",
    src: 'image10.webp',
    poster: "",
    title: "Kids Party",
    
  },
  {
    id: 3,
    type: "image",
    src: 'image19.webp',
    poster: "",
    title: "Mehandi Celebration",
   
  },
  {
    id: 4,
    type: "image",
    src: 'image11.webp',
    poster: "",
    title: "Gorilla Vibes In Action",
    
  },
];


// =====================================================
// WHY GORILLA VIBES
// =====================================================

const reasons = [
  {
    id: 1,
    number: "01",
    title: "High-Energy Entertainment",
    description:
      "Our party gorilla brings instant energy, laughter and excitement to birthdays, weddings and celebrations in Agra.",
  },
  {
    id: 2,
    number: "02",
    title: "Unforgettable Moments",
    description:
      "From surprise entrances to crazy dance moments, we create experiences your guests remember.",
  },
  {
    id: 3,
    number: "03",
    title: "Made For Your Event",
    description:
      "Every celebration is different, so we shape our gorilla, mascot, DJ and lighting entertainment around your occasion and audience.",
  },
  {
    id: 4,
    number: "04",
    title: "Professional Approach",
    description:
      "We focus on energetic performances, guest interaction and keeping your event running smoothly",
  },
];


// =====================================================
// ABOUT PAGE
// =====================================================

const About = () => {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[var(--color-primary)]
          py-14
          sm:py-20
          lg:py-24
        "
      >
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Gorilla Vibes entertainment"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[var(--color-primary)]/65
            "
          />

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

        {/* Hero content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[480px]
            max-w-7xl
            items-center
            px-5
            sm:min-h-[520px]
            sm:px-8
            lg:min-h-[560px]
            lg:px-12
          "
        >
          <div className="max-w-3xl">

            <p
              className="
                mb-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[var(--color-accent)]
                sm:text-xs
              "
            >
              ABOUT GORILLA VIBES . AGRA
            </p>

            <h1
              className="
                max-w-3xl
                text-5xl
                font-black
                leading-[0.9]
                tracking-tight
                text-[var(--color-white)]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              We Bring The Gorilla.
              <span className="block text-[var(--color-accent)]">
                You Bring The Celebration.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-[var(--color-white)]/80
                sm:text-base
                sm:leading-7
              "
            >
              Gorilla Vibes turns ordinary celebrations in Agra into unforgettable ones. Our party gorilla, fun mascots like Motu Patlu, and DJ and lighting setups bring the energy, laughter and crazy moments your guests will talk about.
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
                message="Hi! I'd like to know more about Gorilla Vibes."
                className="w-full sm:w-[180px]"
              >
                WhatsApp Us
              </WhatsAppCTA>

              <a
                href="#our-story"
                className="
                  inline-flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--color-white)]/10
                  px-5
                  text-[12px]
                  font-semibold
                  text-[var(--color-white)]
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:bg-[var(--color-white)]/20
                  sm:w-[180px]
                "
              >
                Our Story
                <FaArrowRight className="text-[10px]" />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section
        id="our-story"
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
        "
      >
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* Image */}
          <div className="relative">

            <div
              className="
                absolute
                -left-3
                -top-3
                h-20
                w-20
                rounded-2xl
                bg-[var(--color-accent)]
                sm:-left-5
                sm:-top-5
              "
            />

            <img
              src='imagenine.webp'
              alt="Fun party mascots for birthday parties and celebrations in Agra"
              className="
                relative
                z-10
                aspect-[4/5]
                w-full
                
                rounded-3xl
                object-cover
              "
            />

            <div
              className="
                absolute
                -bottom-5
                -right-3
                z-20
                rounded-2xl
                bg-[var(--color-primary)]
                px-5
                py-4
                text-[var(--color-white)]
                shadow-[var(--shadow-soft)]
                sm:-right-5
              "
            >
              <p className="text-2xl font-black">100%</p>
              <p className="text-[10px] font-medium text-[var(--color-white)]/70">
                Celebration Energy
              </p>
            </div>
          </div>


          {/* Content */}
          <div>

            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[var(--color-primary)]
              "
            >
              OUR STORY
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-[var(--color-text)]
                sm:text-5xl
              "
            >
              More Than A Costume.
              <span className="block text-[var(--color-primary)]">
                It's An Experience.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-[var(--color-text-muted)]
              "
            >
             We started Gorilla Vibes in Agra with one simple idea: celebrations should feel exciting, unexpected and impossible to forget.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[var(--color-text-muted)]
              "
            >
              Whether it's a birthday party, a wedding or a family celebration, our party gorilla and mascot appearances are designed to get people smiling, laughing, dancing and creating memories together.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Fun for kids and adults",
                "Interactive party entertainment",
                " Photo moments everyone remembers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-accent)]
                    "
                  >
                    <FaCheck className="text-[10px]" />
                  </div>

                  <p className="text-sm font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY GORILLA VIBES
      ====================================================== */}

      <section
        className="
          bg-[var(--color-primary)]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[var(--color-accent)]
              "
            >
              WHY GORILLA VIBES
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-[var(--color-white)]
                sm:text-5xl
              "
            >
              We Don't Just Show Up.
              <span className="block text-[var(--color-accent)]">
                We Bring The Energy.
              </span>
            </h2>

          </div>


          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-3xl
              bg-[var(--color-white)]/10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {reasons.map((reason) => (
              <article
                key={reason.id}
                className="
                  bg-[var(--color-primary)]
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-[var(--color-primary-dark)]
                  sm:p-8
                "
              >
                <span
                  className="
                    text-xs
                    font-black
                    text-[var(--color-accent)]
                  "
                >
                  {reason.number}
                </span>

                <h3
                  className="
                    mt-10
                    text-lg
                    font-bold
                    text-[var(--color-white)]
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-[var(--color-white)]/60
                  "
                >
                  {reason.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          PAST EVENT MEMORIES
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
        "
      >

        {/* Section heading */}
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[var(--color-primary)]
              "
            >
              REAL MOMENTS
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-[var(--color-text)]
                sm:text-5xl
              "
            >
              Moments We've Created.
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[var(--color-text-muted)]
              "
            >
              A few memories from the celebrations we've had the pleasure
              of being part of.
            </p>

          </div>

<Link
  to="/gallery"
  className="
    gallery-button-pulse
    group
    relative
    inline-flex
    h-[48px]
    w-fit
    items-center
    gap-3
    overflow-hidden
    rounded-full
    bg-[var(--color-accent)]
    px-6
    text-xs
    font-black
    uppercase
    tracking-wide
    text-[var(--color-text)]
    shadow-[0_8px_25px_rgba(255,212,42,0.25)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_12px_35px_rgba(255,212,42,0.4)]
    active:scale-95
  "
>
  {/* Animated shine */}
  <span
    className="
      absolute
      inset-y-0
      -left-12
      w-8
      rotate-[20deg]
      bg-[var(--color-white)]/40
      blur-sm
      transition-all
      duration-700
      group-hover:left-[110%]
    "
  />

  <span className="relative z-10 ">
    Explore More
  </span>

  {/* Arrow circle */}
  <span
    className="
      relative
      z-10
      flex
      h-7
      w-7
      items-center
      justify-center
      rounded-full
      bg-[var(--color-secondary)]
      text-[var(--color-white)]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    <FaArrowRight className="text-[9px]" />
  </span>
</Link>         

        </div>


        {/* =====================================================
            EVENT MEDIA GRID
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {pastEvents.map((event) => (
            <article
              key={event.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-[var(--color-surface)]
                shadow-[var(--shadow-soft)]
              "
            >

              {/* Media */}
              <div className="relative aspect-[4/5] overflow-hidden">

                {event.type === "video" ? (
                  <video
                    src={event.src}
                    poster={event.poster || undefined}
                    muted
                    loop
                    playsInline
                    controls
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                ) : (
                  <img
                    src={event.src}
                    alt={event.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                )}

                {/* Video indicator */}
                {event.type === "video" && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-black)]/70
                      text-[var(--color-white)]
                      backdrop-blur-sm
                    "
                  >
                    <FaPlay className="ml-0.5 text-[11px]" />
                  </div>
                )}

              </div>


              {/* Event details */}
              <div className="p-5">

                <h3
                  className="
                    text-sm
                    font-bold
                    text-[var(--color-text)]
                  "
                >
                  {event.title}
                </h3>

              </div>

            </article>
          ))}
        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          px-5
          pb-16
          sm:px-8
          sm:pb-20
          lg:px-12
          lg:pb-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            bg-[var(--color-accent)]
            px-6
            py-12
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >

          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-2xl">

              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.3em]
                  text-[var(--color-secondary)]
                "
              >
                LET'S MAKE IT SPECIAL
              </p>

              <h2
                className="
                  mt-3
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-[var(--color-text)]
                  sm:text-5xl
                "
              >
                Ready To Create Your Own Gorilla Vibes Memory?
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-[var(--color-text)]/70
                "
              >
                Tell us about your celebration and let's make it one
                everyone remembers.
              </p>

            </div>


            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <WhatsAppCTA
                message="Hi! I'd like to book Gorilla Vibes for my event."
                className="w-full bg-green-600 hover:bg-green-900 hover:text-white sm:w-[180px]"
              >
                WhatsApp Us
              </WhatsAppCTA>

              <CallCTA className="w-full sm:w-[180px]" />

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
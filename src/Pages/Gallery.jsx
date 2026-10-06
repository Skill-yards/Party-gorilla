import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import WhatsAppCTA from "../components/WhatsAppCTA";
import CallCTA from "../components/CallCTA";


const galleryItems = [
    // add poster image when galleryItem type is video
  {
    id: 1,
    type: "image",
    src: 'imageOne.webp',
    poster: "",
    title: "Home Decoration",
    
  },
  {
    id: 2,
    type: "image",
    src: 'imageTwo.webp',
    poster: "",
    title: "Mehandi Ceremony",

  },
  {
    id: 3,
    type: "image",
    src: 'imageThree.webp',
    poster: "",
    title: "Home Decoration",
    
  },
  {
    id: 4,
    type: "image",
    src:'imagefour.webp',
    poster: "",
    title: "Gorilla Vibes In Action",
    
  },
  {
    id: 5,
    type: "image",
    src:'imagefive.webp',
    poster: "",
    title: "Motu Patlu Costum",
    
  },
  {
    id: 6,
    type: "image",
    src:'imagesix.webp',
    poster: "",
    title: "White Gorilla Costum",
    
  },
  {
    id: 7,
    type: "image",
    src:'imageseven.webp',
    poster: "",
    title: " Yellow Gorilla Vibes In Action",
    
  }, 
  {
    id: 8,
    type: "image",
    src:'imageeight.webp',
    poster: "",
    title: "Super Mario Costum",
    
  }, 
  {
    id: 9,
    type: "image",
    src:'imagenine.webp',
    poster: "",
    title: "Cute Rabbit Costum",
    
  }, 
  {
    id: 10,
    type: "image",
    src:'image10.webp',
    poster: "",
    title: "Panda Costum",
    
  },
  {
    id: 11,
    type: "image",
    src:'image12.webp',
    poster: "",
    title: "Cute White Bear Costum",
    
  },  
  {
    id: 12,
    type: "image",
    src:'image13.webp',
    poster: "",
    title: "Family Function",
    
  },  
  {
    id: 13,
    type: "image",
    src:'image15.webp',
    poster: "",
    title: "Mickey Mouse Costum",
    
  },  
  {
    id: 14,
    type: "image",
    src:'image16.webp',
    poster: "",
    title: "Cute Teddy Costum",
    
  },     
  {
    id: 15,
    type: "image",
    src:'image17.webp',
    poster: "",
    title: "Mehendi Decoration",
    
  }, 
  {
    id: 16,
    type: "image",
    src:'image19.webp',
    poster: "",
    title: "Haldi Decoration",
    
  }, 
    {
    id: 17,
    type: "image",
    src:'image20.webp',
    poster: "",
    title: "Home Decoration",
    
  },   

  
  
    
   


];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedEvent =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  /* =========================================================
     OPEN / CLOSE
  ========================================================= */

  const openMemory = (index) => {
    setSelectedIndex(index);
  };

  const closeMemory = () => {
    setSelectedIndex(null);
  };

  /* =========================================================
     NEXT / PREVIOUS
  ========================================================= */

  const showNext = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return (currentIndex + 1) % galleryItems.length;
    });
  };

  const showPrevious = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return (
        (currentIndex - 1 + galleryItems.length) % galleryItems.length
      );
    });
  };

  /* =========================================================
     KEYBOARD CONTROLS + BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMemory();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[var(--color-white)]/5 blur-3xl" />

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[420px]
            max-w-7xl
            items-center
            px-5
            py-16
            sm:min-h-[460px]
            sm:px-8
            sm:py-20
            lg:min-h-[500px]
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
              OUR MEMORIES
            </p>

            <h1
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.95]
                tracking-tight
                text-[var(--color-white)]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              The Vibes
              <br />
              We&apos;ve Created.
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-6
                text-[var(--color-white)]/75
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              From birthday surprises to unforgettable celebrations, here are
              some of the moments we&apos;ve brought to life with Gorilla Vibes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message="Hi! I'd like to create an unforgettable Gorilla Vibes experience."
                className="w-full sm:w-[190px]"
              >
                Book Your Gorilla
              </WhatsAppCTA>

              <Link
                to="/about"
                className="
                  inline-flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--color-secondary)]
                  px-5
                  text-[12px]
                  font-semibold
                  text-[var(--color-white)]
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:bg-[var(--color-secondary-hover)]
                  active:scale-95
                  sm:w-[150px]
                "
              >
                <FaArrowLeft className="text-[10px]" />
                Back to About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.3em]
              text-[var(--color-primary)]
              sm:text-xs
            "
          >
            PAST EVENTS
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-[var(--color-text)]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Moments Worth Remembering
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-[var(--color-text-muted)]
              sm:text-base
            "
          >
            Every celebration has its own story. Tap any memory to experience
            it up close.
          </p>
        </div>

        {/* =========================================================
            COMPACT MEMORY GRID

            MOBILE  → 5 cards per row
            DESKTOP → 4 cards per row
        ========================================================= */}
        {galleryItems.length > 0 ? (
          <div
            className="
              mt-10
              grid
              grid-cols-5
              gap-1.5
              sm:mt-12
              sm:gap-3
              md:grid-cols-4
              lg:gap-5
            "
          >
            {galleryItems.map((event, index) => (
              <button
                key={event.id}
                type="button"
                onClick={() => openMemory(index)}
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-lg
                  bg-[var(--color-secondary)]
                  text-left
                  shadow-[var(--shadow-soft)]
                  outline-none
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)]
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-accent)]
                  focus-visible:ring-offset-2
                  sm:rounded-xl
                "
                aria-label={`Open ${event.title}`}
              >
                {/* IMAGE */}
                {event.type === "image" ? (
                  <img
                    src={event.src}
                    alt={event.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                ) : (
                  /* VIDEO THUMBNAIL */
                  <video
                    src={event.src}
                    poster={event.poster || undefined}
                    muted
                    playsInline
                    preload="metadata"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                )}

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[var(--color-black)]/0
                    transition-colors
                    duration-300
                    group-hover:bg-[var(--color-black)]/25
                  "
                />

                {/* VIDEO PLAY ICON */}
                {event.type === "video" && (
                  <span
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-accent)]
                      text-[var(--color-text)]
                      shadow-lg
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaPlay className="ml-0.5 text-[9px] sm:text-[11px]" />
                  </span>
                )}

                {/* MEMORY NUMBER */}
                <span
                  className="
                    absolute
                    bottom-1.5
                    left-1.5
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-black)]/60
                    px-1
                    text-[8px]
                    font-bold
                    text-[var(--color-white)]
                    backdrop-blur-sm
                    sm:bottom-2
                    sm:left-2
                    sm:h-6
                    sm:min-w-6
                    sm:text-[9px]
                  "
                >
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div
            className="
              mt-12
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              px-6
              py-16
              text-center
              shadow-[var(--shadow-soft)]
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[var(--color-success-soft)]
                text-[var(--color-primary)]
              "
            >
              <FaWhatsapp className="text-xl" />
            </div>

            <h3 className="mt-5 text-xl font-black text-[var(--color-text)]">
              Memories Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
              We&apos;re adding our latest Gorilla Vibes event memories here.
              Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-3xl
            bg-[var(--color-primary)]
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-accent)]/10 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[var(--color-white)]/5 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[var(--color-accent)]
                sm:text-xs
              "
            >
              YOUR TURN
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                leading-tight
                text-[var(--color-white)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Ready To Create A Memory Worth Sharing?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[var(--color-white)]/70
                sm:text-base
                sm:leading-7
              "
            >
              Bring Gorilla Vibes to your next birthday, party or special
              celebration and make it one everyone remembers.
            </p>

            <div className="mt-7 flex justify-center space-x-3">
              <WhatsAppCTA
                message="Hi! I'd like to book Gorilla Vibes for my event."
                className="w-full sm:w-[210px]"
              >
                Book Your Event
              </WhatsAppCTA>
              <CallCTA className="w-full sm:w-[210px]"></CallCTA>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FULLSCREEN MEMORY VIEWER
      ========================================================= */}
      {selectedEvent && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[var(--color-black)]/90
            p-3
            backdrop-blur-sm
            sm:p-6
          "
          onClick={closeMemory}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeMemory}
            className="
              absolute
              right-4
              top-4
              z-[110]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[var(--color-white)]/10
              text-[var(--color-white)]
              backdrop-blur-md
              transition-all
              duration-200
              hover:scale-110
              hover:bg-[var(--color-white)]/20
              active:scale-95
              sm:right-6
              sm:top-6
            "
            aria-label="Close gallery"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* PREVIOUS BUTTON */}
          {galleryItems.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="
                absolute
                left-2
                top-1/2
                z-[110]
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[var(--color-white)]/10
                text-[var(--color-white)]
                backdrop-blur-md
                transition-all
                duration-200
                hover:scale-110
                hover:bg-[var(--color-white)]/20
                active:scale-95
                sm:left-5
                sm:h-12
                sm:w-12
              "
              aria-label="Previous memory"
            >
              <FaArrowLeft className="text-xs sm:text-sm" />
            </button>
          )}

          {/* NEXT BUTTON */}
          {galleryItems.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="
                absolute
                right-2
                top-1/2
                z-[110]
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[var(--color-white)]/10
                text-[var(--color-white)]
                backdrop-blur-md
                transition-all
                duration-200
                hover:scale-110
                hover:bg-[var(--color-white)]/20
                active:scale-95
                sm:right-5
                sm:h-12
                sm:w-12
              "
              aria-label="Next memory"
            >
              <FaArrowRight className="text-xs sm:text-sm" />
            </button>
          )}

          {/* =====================================================
              MEDIA CONTAINER
          ===================================================== */}
          <div
            className="
              relative
              flex
              max-h-[90vh]
              max-w-[92vw]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              bg-[var(--color-secondary)]
              shadow-2xl
              sm:max-w-[88vw]
              lg:max-w-[82vw]
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* IMAGE */}
            {selectedEvent.type === "image" ? (
              <img
                key={selectedEvent.id}
                src={selectedEvent.src}
                alt={selectedEvent.title}
                className="
                  max-h-[78vh]
                  max-w-[92vw]
                  object-contain
                  animate-[galleryZoom_300ms_ease-out]
                  sm:max-h-[82vh]
                  sm:max-w-[88vw]
                "
              />
            ) : (
              /* VIDEO */
              <video
                key={selectedEvent.id}
                src={selectedEvent.src}
                poster={selectedEvent.poster || undefined}
                autoPlay
                controls
                playsInline
                className="
                  max-h-[78vh]
                  max-w-[92vw]
                  object-contain
                  animate-[galleryZoom_300ms_ease-out]
                  sm:max-h-[82vh]
                  sm:max-w-[88vw]
                "
              />
            )}

            {/* MEDIA INFO */}
            <div
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                bg-[var(--color-secondary)]
                px-4
                py-3
                sm:px-5
                sm:py-4
              "
            >
              <div className="min-w-0">
                <h3
                  className="
                    truncate
                    text-xs
                    font-black
                    text-[var(--color-white)]
                    sm:text-sm
                  "
                >
                  {selectedEvent.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    text-[var(--color-white)]/55
                    sm:text-xs
                  "
                >
                  {selectedEvent.location}
                </p>
              </div>

              <span
                className="
                  shrink-0
                  rounded-full
                  bg-[var(--color-accent)]
                  px-3
                  py-1
                  text-[9px]
                  font-black
                  uppercase
                  tracking-wide
                  text-[var(--color-text)]
                "
              >
                {selectedIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          GALLERY ZOOM ANIMATION
      ========================================================= */}
      <style>{`
        @keyframes galleryZoom {
          from {
            opacity: 0;
            transform: scale(0.88);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
};

export default Gallery;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const sections = [
  {
    title: "Ignite Life",
    p1: "Feel Better - Heal Better",
    button: "Book Now!",
    href: "https://ignite-life-bowen-therapy.square.site",
    backgroundImage: "/hero1.jpg",
  },
  {
    title: "Bowen Therapy",
    p1:
      "Discover the Transformative Benefits",

    button: "Learn More",
    href: "https://ignite-life-bowen-therapy.square.site",
    backgroundImage: "/hero2.jpg",
  },
];

function HeroSlide({
                     title,
                     p1,

                     button,
                     href,
                     ImageNow,
                     ImagePrev
                   } :{
  title: string;
  p1: string;

  button: string;
  href: string;
  ImageNow: string;
  ImagePrev: string;
}) {
  return (
    <div className="relative isolate flex items-center justify-center overflow-hidden pt-14 lg:h-[48rem] md:h-[36rem] h-[24rem]">
      <img
        alt=""
        src={ImageNow}
        className="absolute inset-0 -z-10 h-full w-full object-cover  long-slide-in"
      />

      <img
        alt=""
        src={ImagePrev}
        className="absolute inset-0 -z-20 h-full w-full object-cover long-slide-out"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-25 -z-10"></div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl shadow-text hero-in"
          >
            {title}
          </h1>
          <p
            className="mt-6 text-xl leading-8 font-medium text-gray-100 shadow-text hero-in-d1"
          >
            {p1}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6 hero-in-d2">
            <Link
              to={href}
              className="hero-button"

            >
              {button}
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function HeroSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState(sections.length - 1); // Start with the last section

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSection(currentSection);
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [currentSection]);

  return (
    <HeroSlide
      key={currentSection}
      title={sections[currentSection].title}
      p1={sections[currentSection].p1}
      button={sections[currentSection].button}
      href={sections[currentSection].href}
      ImageNow={sections[currentSection].backgroundImage}
      ImagePrev={sections[previousSection].backgroundImage}
    />
  );
}


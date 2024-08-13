import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './herosectionstyles.css';


interface HeroSlideProps {
  title: string;
  content: string;
  button: string;
  href: string;
  ImageNow: string;
  ImagePrev: string;
}

interface HeroSectionProps {
  title: string;
  content: string;
  button: string;
  href: string;
  backgroundImage  : string;
}

function HeroSlide({
  title,
  content,
  button,
  href,
  ImageNow,
  ImagePrev,
}: HeroSlideProps) {
  return (
    <>
    <div className="relative isolate flex h-[24rem] items-center justify-center overflow-hidden pt-14 md:h-[36rem] lg:h-[48rem]">
      <img
        alt=""
        src={ImageNow}
        className="long-slide-in absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <img
        alt=""
        src={ImagePrev}
        className="long-slide-out absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black opacity-25"></div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="shadow-text hero-in text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="shadow-text hero-in-d1 mt-6 text-xl font-medium leading-8 text-gray-100">
            {content}
          </p>
          <div className="hero-in-d2 mt-6 flex items-center justify-center gap-x-6">
            <Link to={href} className="hero-button">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default function HeroSection({ sections } : {sections: HeroSectionProps[]}) {
  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState(sections.length - 1); // Start with the last section

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSection(currentSection);
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1,
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [currentSection]);

  return (
    <HeroSlide
      key={currentSection}
      title={sections[currentSection].title}
      content={sections[currentSection].content}
      button={sections[currentSection].button}
      href={sections[currentSection].href}
      ImageNow={sections[currentSection].backgroundImage}
      ImagePrev={sections[previousSection].backgroundImage}
    />
  );
}

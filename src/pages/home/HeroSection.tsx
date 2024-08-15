import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./herosectionstyles.module.css";

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
  backgroundImage: string;
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
    <div className="relative isolate flex h-[36rem] items-center justify-center overflow-hidden bg-ignite-cream md:h-[48rem] lg:h-[64rem]">
      {/* Current Image */}
      <img
        alt=""
        src={ImageNow}
        className={`${styles["long-slide-in"]} absolute inset-0 -z-10 h-full w-full object-cover max-w-full `}
      />

      <img
        alt=""
        src={ImagePrev}
        className={`${styles["long-slide-out"]} absolute inset-0 -z-20 h-full w-full object-cover max-w-full`}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black opacity-25"></div>

      {/* Main Content */}
      <div
        className={`${styles["late-fade-out"]} mx-auto max-w-2xl py-32 sm:py-48 lg:py-56`}
      >
        <div className="-mt-8 space-y-6 text-center md:space-y-8">
          <h1
            className={`${styles["shadow-text"]} ${styles["hero-in"]} text-4xl font-bold tracking-tight text-white sm:text-6xl`}
          >
            {title}
          </h1>

          <p
            className={`${styles["shadow-text"]} ${styles["hero-in-d1"]} text-xl font-medium leading-8 text-gray-100`}
          >
            {content}
          </p>

          <div
            className={`${styles["hero-in-d2"]} flex items-center justify-center gap-x-6`}
          >
            <Link to={href} className={styles["hero-button"]}>
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({
  sections,
}: {
  sections: HeroSectionProps[];
}) {
  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSection(currentSection);
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1,
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [currentSection, sections.length]);

  return (
    <HeroSlide
      key={currentSection}
      title={sections[currentSection].title}
      content={sections[currentSection].content}
      button={sections[currentSection].button}
      href={sections[currentSection].href}
      ImageNow={sections[currentSection].backgroundImage}
      ImagePrev={
        previousSection !== null
          ? sections[previousSection].backgroundImage
          : ""
      }
    />
  );
}

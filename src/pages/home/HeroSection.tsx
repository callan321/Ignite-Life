import { useEffect, useState } from "react";
import HeroButton from "./HeroButton.tsx";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  content: string;
  button: string;
  href: string;
  backgroundImage: string;
}

export default function HeroSection({
                                      sections,
                                    }: {
  sections: HeroSectionProps[];
}) {
  const TIMEOUT = 10000;
  const [currentSection, setCurrentSection] = useState(0);
  const [prevImage, setPrevImage] = useState<string | null>(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const [fadeOutTitle, setFadeOutTitle] = useState(false);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [fadeOutButton, setFadeOutButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {

      setFadeOutButton(true);
      setTimeout(() => {
        setFadeOutContent(true);
      }, 600);
      setTimeout(() => {
        setFadeOutTitle(true);
      }, 1200);


      setTimeout(() => {
        setPrevImage(sections[currentSection].backgroundImage);
        setCurrentSection((prevSection) =>
          prevSection === sections.length - 1 ? 0 : prevSection + 1
        );
        setFadeOutTitle(false);
        setFadeOutContent(false);
        setFadeOutButton(false);
        setTitleVisible(false);
        setContentVisible(false);
        setButtonVisible(false);
      }, 2000);
    }, TIMEOUT);

    return () => clearInterval(interval);
  }, [sections.length, currentSection, sections]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setTitleVisible(true);
      setTimeout(() => {
        setContentVisible(true);
      }, 500);
      setTimeout(() => {
        setButtonVisible(true);
      }, 1500);
    }, 1500);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [currentSection]);

  return (
    <div className="relative isolate flex h-[36rem] items-center justify-center overflow-hidden bg-ignite-cream md:h-[48rem] lg:h-[64rem]">
      {/* Previous Image (fades out) */}
      {prevImage && (
        <img
          key={prevImage}
          alt=""
          src={prevImage}
          className={`absolute inset-0 -z-20 h-full w-full object-cover max-w-full transition-opacity duration-1000 fade-out`}
        />
      )}

      {/* Current Image (fades in) */}
      <img
        key={sections[currentSection].backgroundImage}
        alt=""
        src={sections[currentSection].backgroundImage}
        className="absolute inset-0 -z-30 h-full w-full object-cover max-w-full transition-opacity duration-1000 fade-in"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black opacity-25"></div>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div key={currentSection} className="-mt-8 space-y-6 text-center text-shadow md:space-y-8">
          <h1
            className={`text-4xl font-bold tracking-tight text-white sm:text-6xl ${
              titleVisible ? "slide-in" : "opacity-0"
            } ${fadeOutTitle ? "fade-out" : ""}`}
          >
            {sections[currentSection].title}
          </h1>

          <p
            className={`text-xl ${
              contentVisible ? "slide-in-typing" : "opacity-0"
            } font-medium leading-8 text-shadow text-gray-100 ${
              fadeOutContent ? "fade-out" : ""
            }`}
          >
            {sections[currentSection].content}
          </p>

          <div
            className={`flex ${
              buttonVisible ? "slide-in-subtle" : "opacity-0"
            } items-center justify-center gap-x-6 ${
              fadeOutButton ? "fade-out" : ""
            }`}
          >
            <HeroButton
              name={sections[currentSection].button}
              onClick={() => navigate(sections[currentSection].href)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

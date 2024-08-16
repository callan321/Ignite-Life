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
  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSection(currentSection);
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSection, sections.length]);

  return (
    <div className="relative isolate flex h-[36rem] items-center justify-center overflow-hidden bg-ignite-cream md:h-[48rem] lg:h-[64rem]">
      {/* Current Image */}
      <img
        alt=""
        src={sections[currentSection].backgroundImage}
        className="absolute inset-0 fade-in -z-10 h-full w-full object-cover max-w-full"
      />

      {/* Previous Image */}
      {previousSection !== null && (
        <img
          alt=""
          src={sections[previousSection].backgroundImage}
          className="absolute inset-0 fade-out -z-20 h-full w-full object-cover max-w-full"
        />
      )}

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black opacity-25"></div>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="-mt-8 space-y-6 text-center text-shadow md:space-y-8">
          <h1 className="text-4xl font-bold tracking-tight slide-in text-white sm:text-6xl">
            {sections[currentSection].title}
          </h1>

          <p className="text-xl slide-in-typing typing font-medium leading-8 text-shadow text-gray-100">
            {sections[currentSection].content}
          </p>
          <div className="flex slide-in items-center justify-center gap-x-6">
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

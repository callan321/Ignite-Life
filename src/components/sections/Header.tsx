import { useState, useEffect } from "react";
import { navigation } from "../../config.ts";
import ToggleButton from "../ui/ToggleButton.tsx";
import { NavLink } from "react-router-dom";
import styles from "./headerstyles.module.css";

function Heading({ className }: { className?: string }) {
  return (
    <span
      className={`text-gold shadow-text font-great-vibes text-4xl font-medium leading-tight text-gray-100 ${className}`}
    >
      <span>Ignite Life</span>
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animationState, setAnimationState] = useState<string>("fade-in-slow");

  const toggleMenu = () => setIsOpen(!isOpen);
  const shutMenu = () => setIsOpen(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setAnimationState("fade-out");
    } else {
      setAnimationState("fade-in");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-transparent ${
        styles[animationState]
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between pt-14">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <ToggleButton
              isActive={isOpen}
              onClick={toggleMenu}
              description={"Toggle Mobile Menu Button"}
            />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((tab: { name: string; href: string }) => (
                <NavLink
                  key={tab.name}
                  to={tab.href}
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? styles["tab-active"] : styles["tab-inactive"]
                  }
                >
                  {tab.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span
              className="flex flex-shrink-0 items-center p-2"
              aria-hidden="true"
            >
              <Heading className={"hidden sm:flex"} />
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="space-y-1 pb-4 pt-2 sm:hidden">
          {navigation.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.href}
              onClick={shutMenu}
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

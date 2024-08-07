import { useState } from "react";
import { navigation } from "../config.ts";
import { NavLink } from "react-router-dom";

const XMark = () => (
  <div aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  </div>
);

const Bars = () => (
  <div aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  </div>
);

function Heading({ className }: { className?: string }) {
  return (
    <span
      className={`text-gold font-serif text-lg font-medium leading-tight text-gray-600 ${className}`}
    >
      <span>Ignite Life</span>
    </span>
  );
}

const Favicon = () => (
  <i aria-hidden="true">
    <img alt="Ignite Icon" src="/favicon.png" className="h-10 w-10" />
  </i>
);

function Tabs({
  navigation,
  className,
}: {
  navigation: { name: string; href: string }[];
  className: string;
}) {
  return (
    <nav className={className}>
      {navigation.map((tab: { name: string; href: string }) => (
        <NavLink
          key={tab.name}
          to={tab.href}
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}

function MobileTabs({
  navigation,
  className,
}: {
  navigation: { name: string; href: string }[];
  className: string;
}) {
  return (
    <nav className={className}>
      {navigation.map((tab) => {
        const isActive = false;
        return (
          <NavLink
            key={tab.name}
            to={tab.href}
            className={
              isActive
                ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            }
          >
            {tab.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

function ToggleButton({
  isActive,
  onClick,
  description,
}: {
  isActive: boolean;
  onClick: () => void;
  description: string;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">{description}</span>
      {!isActive && <XMark />}
      {isActive && <Bars />}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="z-40 w-full overflow-hidden bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <ToggleButton
              isActive={isOpen}
              onClick={toggleMenu}
              description={"Toggle Mobile Menu Button"}
            />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Heading className={"sm:hidden"} />
            <Tabs
              navigation={navigation}
              className={"hidden sm:ml-6 sm:flex sm:space-x-8"}
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span
              className="flex flex-shrink-0 items-center p-2"
              aria-hidden="true"
            >
              <Favicon />
              <Heading className={"hidden sm:flex"} />
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <MobileTabs
          navigation={navigation}
          className={"space-y-1 pb-4 pt-2 sm:hidden"}
        />
      )}
    </header>
  );
}

import { useState } from "react";
import { navigation } from "../config.ts";
import ToggleButton from "../components/ui/ToggleButton.tsx";
import { Favicon } from "../components/ui/Icons.tsx";
import {Tabs, MobileTabs} from "../components/ui/Tabs.tsx";

function Heading({ className }: { className?: string }) {
  return (
    <span
      className={`text-gold font-serif text-lg font-medium leading-tight text-gray-600 ${className}`}
    >
      <span>Ignite Life</span>
    </span>
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
          onNavigate={toggleMenu}
          className={"space-y-1 pb-4 pt-2 sm:hidden"}
        />
      )}
    </header>
  );
}

import { useState } from "react";
import { navigation } from "../config.ts";
import { NavLink } from "react-router-dom";

export default function Header() {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="z-50 w-full overflow-hidden bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {!isOpen && (
                <div aria-hidden="true" className="block h-6 w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#5f6368">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </div>
              )}
              {isOpen && (
                <div aria-hidden="true" className="block h-6 w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#5f6368">
                    <path
                      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </div>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <span className="text-gold font-serif text-lg font-medium leading-tight text-gray-600 sm:hidden">
              <i>Ignite Life</i>
            </span>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((tab) => {
                const isActive = false;
                return (
                  <NavLink
                    key={tab.name}
                    className={
                      isActive
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }
                    to={tab.href}
                  >
                    {tab.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-shrink-0 items-center p-2">
              <i><img alt="Ignite Icon" src="/favicon.png" className='w-10 h-10' /></i>
              <span className="text-gold hidden font-serif text-lg font-medium leading-tight text-gray-600 sm:flex">
                <i>
                  Ignite
                  <br />
                  Life
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="sm:hidden">
          <div className="space-y-1 pb-4 pt-2">
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
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skiSubmenuOpen, setSkiSubmenuOpen] = useState(false);
  const [bikeSubmenuOpen, setBikeSubmenuOpen] = useState(false);

  function handleLinkClick() {
    setMenuOpen(false);
    setSkiSubmenuOpen(false);
    setBikeSubmenuOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900 relative z-40">
        <Link href="/" className="text-2xl font-bold tracking-tight" onClick={handleLinkClick}>NA Outdoor</Link>
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-transform duration-200 ease-out ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-opacity duration-200 ease-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-200 ease-out ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          ></span>
        </button>
        {/* Hamburger menu */}
        <nav
          className={`absolute top-16 right-6 bg-white dark:bg-gray-900 shadow-lg rounded p-4 z-50 min-w-[200px] transform transition-all duration-200 ease-out ${
            menuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-2">
            {/* Ski and recovery with submenu */}
            <li>
              <div className="flex items-center justify-between">
                <Link href="/ski-and-recovery" className="text-gray-700 dark:text-gray-200 flex-1" onClick={handleLinkClick}>Ski and recovery</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSkiSubmenuOpen(!skiSubmenuOpen);
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-2 p-1 rounded"
                >
                  {skiSubmenuOpen ? '−' : '+'}
                </button>
              </div>
              {skiSubmenuOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/ski-and-recovery/ski-trail-map"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 block py-1"
                      onClick={handleLinkClick}
                    >
                      Ski trail map
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Bike 2 basic with submenu */}
            <li>
              <div className="flex items-center justify-between">
                <Link href="/bike-2-basic" className="text-gray-700 dark:text-gray-200 flex-1" onClick={handleLinkClick}>Bike 2 basic</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setBikeSubmenuOpen(!bikeSubmenuOpen);
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-2 p-1 rounded"
                >
                  {bikeSubmenuOpen ? '−' : '+'}
                </button>
              </div>
              {bikeSubmenuOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/bike-2-basic/hiking-map"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 block py-1"
                      onClick={handleLinkClick}
                    >
                      Hiking map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bike-2-basic/bike-trail-map"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 block py-1"
                      onClick={handleLinkClick}
                    >
                      Bike trail map
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Regular menu items */}
            <li className="text-gray-700 dark:text-gray-200">
              <Link href="/readings" onClick={handleLinkClick}>Readings</Link>
            </li>
            <li className="text-gray-700 dark:text-gray-200">
              <Link href="/donations" onClick={handleLinkClick}>Donations</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 text-sm relative z-10">
      </footer>
    </div>
  );
} 
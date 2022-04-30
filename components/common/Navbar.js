import React, { useState } from "react";
import Link from "next/link";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-primary-500">
        <div className="mx-auto flex max-w-7xl px-4">
          <div className="flex h-nav w-full items-center justify-between">
            <div className="flex items-center hover:opacity-80">
              <Link href="/" passHref>
                <a className="text-center font-main text-6xl  font-extrabold text-white">
                  Passport
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="btn text-white">
                <Link href="#" passHref>
                  <a className="">Log in</a>
                </Link>
              </div>
              <div className="btn bg-primary-300 text-white">
                <Link href="#" passHref>
                  <a className="">Sign Up</a>
                </Link>
              </div>
            </div>
            {/* nav menu for small screen/mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              <div className=""></div>
            </div>
          </div>
        </div>
        {!isOpen ? (
          <div></div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 md:hidden">
            <button className="inline-block w-full font-main text-xl text-white hover:opacity-70">
              <Link href="#" passHref>
                <a>Log in</a>
              </Link>
            </button>
            <button className="hover: inline-block w-full font-main text-xl text-white hover:opacity-70 ">
              <Link href="#" passHref>
                <a>Sign up</a>
              </Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

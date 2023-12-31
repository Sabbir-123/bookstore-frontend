import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Top area */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link
                className="inline-flex group mb-8 md:mb-0"
                to="/"
                aria-label="Cruip"
              >
                <div className="max-w-[140px]">
                  <img src={logo} width={40} height={40} alt="brand" />
                </div>
              </Link>
            </div>
            {/* Social links */}
            <div className="flex items-center space-x-4 mb-4 md:order-2 md:ml-4 md:mb-0">
              <div className="text-xl font-nycd text-indigo-500">Follow us</div>
              <ul className="inline-flex space-x-3">
                <li>
                  <a
                    className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              
              </ul>
            </div>
          </div>

          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between">
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 mb-2 md:mb-0">
              <ul className="inline-flex flex-wrap text-sm font-medium">
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a
                    className="text-gray-500 hover:text-gray-500 hover:underline"
                    href="#0"
                  >
                    Terms
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a
                    className="text-gray-500 hover:text-gray-500 hover:underline"
                    href="#0"
                  >
                    Privacy
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a
                    className="text-gray-500 hover:text-gray-500 hover:underline"
                    href="#0"
                  >
                    Guidelines
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a
                    className="text-gray-500 hover:text-gray-500 hover:underline"
                    href="#0"
                  >
                    Why Choose Us?
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              @Book Store.com | {year} | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

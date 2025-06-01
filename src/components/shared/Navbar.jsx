import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isShowroomOpen, setIsShowroomOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isShowroomOpen && !e.target.closest('.showroom-dropdown')) {
        setIsShowroomOpen(false);
      }
      if (isAboutOpen && !e.target.closest('.about-dropdown')) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShowroomOpen, isAboutOpen]);

  return (
    <div className="w-full">
      <div className="bg-teal-700 py-4 md:py-8 flex justify-between items-center px-4 md:justify-center">
        <div className="text-white text-center md:mx-auto">
          <div className="text-xl md:text-2xl font-bold mb-2">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">LOGO</span>
            </div>
            Iqbal Hossain
          </div>
          <div className="text-xs md:text-sm opacity-90">INTERIOR</div>
        </div>


        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation section */}
      <div className="bg-yellow-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8 py-4">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            <div className="relative showroom-dropdown">
              <button
                className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1 transition-colors duration-200"
                onClick={() => {
                  setIsShowroomOpen(!isShowroomOpen);
                  setIsAboutOpen(false);
                }}
              >
                <span>All Showroom</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isShowroomOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isShowroomOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/showroom" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Kitchen Showroom
                  </Link>
                  <Link to="/showroom/bedroom" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Bedroom Showroom
                  </Link>
                  <Link to="/showroom/living-room" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Living Room Showroom
                  </Link>
                  <Link to="/showroom/office" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Office Showroom
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Products
            </Link>

            <div className="relative about-dropdown">
              <button
                className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1 transition-colors duration-200"
                onClick={() => {
                  setIsAboutOpen(!isAboutOpen);
                  setIsShowroomOpen(false);
                }}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/about/our-story" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Our Story
                  </Link>
                  <Link to="/about/our-team" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Our Team
                  </Link>
                  <Link to="/about/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                    Mission & Vision
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/news-media"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              News & Media
            </Link>

            <Link
              to="/career"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Career
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              ১২ বছর গুণি উৎকৃষ্ট
            </Link>
          </nav>

          {/* Mobile navigation - shown when menu is open */}
          {isMobileMenuOpen && (
            <nav className="md:hidden bg-yellow-50 py-2 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="relative showroom-dropdown">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                  onClick={() => setIsShowroomOpen(!isShowroomOpen)}
                >
                  <span>All Showroom</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isShowroomOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isShowroomOpen && (
                  <div className="pl-6 py-1">
                    <Link
                      to="/showroom/kitchen"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Kitchen Showroom
                    </Link>
                    <Link
                      to="/showroom/bedroom"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Bedroom Showroom
                    </Link>
                    <Link
                      to="/showroom/living-room"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Living Room Showroom
                    </Link>
                    <Link
                      to="/showroom/office"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Office Showroom
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/products"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>

              <div className="relative about-dropdown">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isAboutOpen && (
                  <div className="pl-6 py-1">
                    <Link
                      to="/about/our-story"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about/our-team"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/about/mission-vision"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/news-media"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Media
              </Link>

              <Link
                to="/career"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>

              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ১২ বছর গুণি উৎকৃষ্ট
              </Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
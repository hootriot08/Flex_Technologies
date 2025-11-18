import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img
              src="/logo.png"
              alt="Flex Technologies"
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-400">
              Private, on-premise AI solutions for mid-sized businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:vaze.atharva18@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  vaze.atharva18@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16303248532"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  (630) 324-8532
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Flex Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


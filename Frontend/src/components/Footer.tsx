import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-semibold">TerraPods</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Where bio-design, art, and agroecology co-create in abundant harmony.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/artists" className="text-gray-400 hover:text-white">Artists</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Agroecology</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Biomaterial Lab</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Art Residencies</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TerraPods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
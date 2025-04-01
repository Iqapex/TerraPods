import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Artists', path: '/artists' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Donate', path: '/donate' },
    { name: 'Partners', path: '/partners' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const secondaryItems = [
    { name: 'Programs', path: '/programs' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Membership', path: '/membership' },
    { name: 'Login', path: '/login' },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.1,
        type: "spring",
        stiffness: 100
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="max-w-screen mx-auto md:px-24 sm:px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="p-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-md transform transition-transform duration-300 group-hover:rotate-[30deg]">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-br from-green-600 to-emerald-700 bg-clip-text text-transparent">
                TerraPods
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Primary Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 font-medium text-[16px] transition-colors relative group ${location.pathname === item.path ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {location.pathname !== item.path && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-gray-200 mx-2"></div>

            {/* Desktop Navigation - Secondary Items */}
            {secondaryItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-[16px] font-medium  transition-colors relative group ${location.pathname === item.path ? 'text-emerald-700' : 'text-gray-500 hover:text-emerald-700'}`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 w-full"
                      layoutId="activeIndicatorSecondary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {location.pathname !== item.path && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-xl"
          >
            <motion.div className="px-4 pt-2 pb-4 space-y-1">
              {[...navItems, ...secondaryItems].map((item) => (
                <motion.div
                  key={item.path}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
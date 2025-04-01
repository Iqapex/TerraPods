import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Lock, Mail, User } from 'lucide-react';

const AuthForm = ({ isLogin = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full top-0 z-50">
        {/* Insert your navbar component here */}
      </nav>

      <div className="max-w-md mx-auto pt-24 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 sm:p-10"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-md mb-4">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {isLogin ? 'Welcome Back to TerraPods' : 'Join TerraPods'}
            </h2>
            <p className="text-gray-500 mt-2">
              {isLogin ? 'Sign in to continue your journey' : 'Create your free account'}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent">
                  <User className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full ml-2 outline-none bg-transparent"
                  />
                </div>
              </motion.div>
            )}

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent">
                <Mail className="h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full ml-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent">
                <Lock className="h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full ml-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full ml-2 outline-none bg-transparent"
                  />
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-br from-green-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:shadow-md transition-all"
              type="submit"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </motion.button>

            <div className="text-center mt-6">
              <p className="text-gray-500">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <Link
                  to={isLogin ? '/signup' : '/login'}
                  className="text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-4 hover:decoration-2"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white border rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  {/* Google SVG icon */}
                </svg>
                <span>Google</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white border rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  {/* GitHub SVG icon */}
                </svg>
                <span>GitHub</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;

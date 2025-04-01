import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trees as Tree, Heart, Users, Leaf } from 'lucide-react';

const Donate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grow With Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              With every donation, we will plant a native tree in your name along the walking path in our food forest. 
              A testament to each individual who grew TerraPods with us from seed to fruit!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps us continue our mission of fostering sustainable practices and 
              nurturing creative innovation in our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Tree className="h-12 w-12" />, number: "1000+", label: "Trees Planted" },
              { icon: <Heart className="h-12 w-12" />, number: "500+", label: "Donors" },
              { icon: <Users className="h-12 w-12" />, number: "200+", label: "Artists Supported" },
              { icon: <Leaf className="h-12 w-12" />, number: "50+", label: "Projects Funded" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-green-600">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Time Donation",
                description: "Make a single contribution to support our programs",
                amount: "Choose Amount",
                color: "bg-white"
              },
              {
                title: "Monthly Supporter",
                description: "Become a regular contributor to our mission",
                amount: "From $10/month",
                color: "bg-green-600 text-white"
              },
              {
                title: "Corporate Sponsorship",
                description: "Partner with us for lasting impact",
                amount: "Custom Amount",
                color: "bg-white"
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${option.color} p-8 rounded-lg shadow-lg text-center`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${option.color === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                  {option.title}
                </h3>
                <p className={`mb-6 ${option.color === 'bg-white' ? 'text-gray-600' : 'text-white'}`}>
                  {option.description}
                </p>
                <div className={`text-xl font-semibold mb-6 ${option.color === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                  {option.amount}
                </div>
                <button
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    option.color === 'bg-white'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-white text-green-600 hover:bg-gray-100'
                  }`}
                >
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
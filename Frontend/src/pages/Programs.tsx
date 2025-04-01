import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Palette, FlaskRound as Flask, Users, Calendar, ArrowRight } from 'lucide-react';

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      title: "Agroecology",
      icon: <Leaf className="h-12 w-12" />,
      description: "Sustainable farming practices and food forest development",
      features: [
        "Regenerative farming techniques",
        "Permaculture design",
        "Soil health management",
        "Water conservation"
      ],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d"
    },
    {
      title: "Art Residencies",
      icon: <Palette className="h-12 w-12" />,
      description: "Creative spaces for artists and innovators",
      features: [
        "Studio space",
        "Exhibition opportunities",
        "Collaborative projects",
        "Community engagement"
      ],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
    },
    {
      title: "Biomaterial Lab",
      icon: <Flask className="h-12 w-12" />,
      description: "Research and development of sustainable materials",
      features: [
        "Material innovation",
        "Sustainable design",
        "Waste reduction",
        "Product development"
      ],
      image: "https://images.unsplash.com/photo-1581093458791-9d58e74010c1"
    }
  ];

  const workshops = [
    {
      title: "Introduction to Permaculture",
      date: "April 15, 2024",
      instructor: "Michael Chen",
      spots: "10 spots left",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      title: "Biomaterial Design Workshop",
      date: "April 22, 2024",
      instructor: "Elena Rodriguez",
      spots: "5 spots left",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119"
    },
    {
      title: "Sustainable Art Practices",
      date: "April 29, 2024",
      instructor: "David Kumar",
      spots: "8 spots left",
      image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover our innovative programs combining art, science, and sustainable practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-20 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 text-green-600 mb-6">
                    {program.icon}
                    <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">{program.description}</p>
                  <ul className="space-y-4 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="h-2 w-2 bg-green-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600">Join our hands-on learning experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {workshop.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Users className="h-4 w-4" />
                    <span>{workshop.instructor}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-medium">{workshop.spots}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Apply now to be part of our innovative programs and workshops
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
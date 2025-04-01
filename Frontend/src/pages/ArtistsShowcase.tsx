import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Share2, MessageCircle } from 'lucide-react';

const ArtistsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const artists = [
    {
      name: "Maya Chen",
      specialty: "Biomaterial Artist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      artwork: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
      description: "Exploring the intersection of nature and art through sustainable materials"
    },
    {
      name: "James Wilson",
      specialty: "Environmental Sculptor",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      artwork: "https://images.unsplash.com/photo-1561839561-b13bcfe95249",
      description: "Creating large-scale installations from recycled materials"
    },
    {
      name: "Sofia Rodriguez",
      specialty: "Eco-Fashion Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      artwork: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
      description: "Revolutionizing fashion through sustainable textiles"
    },
    {
      name: "Alex Kim",
      specialty: "Digital Nature Artist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      artwork: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      description: "Blending technology with natural elements"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Artist Showcase</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover innovative artists pushing the boundaries of sustainable creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {artists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={artist.artwork}
                    alt={`${artist.name}'s Artwork`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center space-x-4">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div className="text-white">
                        <h3 className="font-semibold">{artist.name}</h3>
                        <p className="text-sm opacity-90">{artist.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{artist.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                        <Heart className="h-5 w-5" />
                        <span>245</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                        <MessageCircle className="h-5 w-5" />
                        <span>18</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                      View Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore different forms of sustainable art</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Biomaterial Art",
              "Eco-Sculpture",
              "Sustainable Fashion",
              "Digital Nature",
              "Recycled Art",
              "Natural Pigments",
              "Land Art",
              "Eco-Photography"
            ].map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistsShowcase;
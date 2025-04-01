import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Clock, BookOpen, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredPosts = [
    {
      title: "The Future of Sustainable Agriculture",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      excerpt: "Exploring innovative techniques in regenerative farming and their impact on local ecosystems..."
    },
    {
      title: "Art as a Catalyst for Environmental Change",
      image: "https://images.unsplash.com/photo-1501084817091-258c42bd1b4f",
      author: "Elena Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      excerpt: "How artists are using sustainable materials to create powerful environmental statements..."
    },
    {
      title: "Building Community Through Shared Gardens",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "5 min read",
      excerpt: "The social impact of community gardens and their role in fostering connections..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Featured Post */}
      <section className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TerraPods Blog</h1>
            <p className="text-xl opacity-90">
              Insights, stories, and knowledge from our community
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                  alt="Featured Post"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Revolutionizing Agriculture: The TerraPods Approach
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover how our innovative farming techniques are transforming local food systems
                  and creating sustainable solutions for the future...
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>March 18, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Latest Posts */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h2>
            <p className="text-xl text-gray-600">Explore our recent articles and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "All Posts",
              "Agriculture",
              "Art & Design",
              "Community",
              "Innovation",
              "Sustainability",
              "Research",
              "Events"
            ].map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full ${
                  index === 0
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
                } transition-colors`}
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

export default Blog;
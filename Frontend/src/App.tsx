import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtistsShowcase from './pages/ArtistsShowcase';
import News from './pages/News';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Partners from './pages/Partners';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Calendar from './pages/Calendar';
import MembershipPortal from './pages/MembershipPortal';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<ArtistsShowcase />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/membership" element={<MembershipPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
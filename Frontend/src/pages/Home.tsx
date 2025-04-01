import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import TeamSection from '../components/sections/TeamSection';
import JoinSection from '../components/sections/JoinSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ProgramsSection />
      <TeamSection />
      <JoinSection />
    </div>
  );
};

export default Home;
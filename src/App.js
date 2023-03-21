import './App.css';
import Testimonials from './components/About Us/Testimonials';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import LevelUp from './components/Level Up/LevelUp';
import Plans from './components/Plans/Plans';
import Programs from './components/ProgramsSection/Programs';
import Reasons from './components/ReasonsSection/Reasons';


function App() {
  return (
    <div className="App">
      
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <LevelUp/>
      <Footer/>
    </div>
  );
}

export default App;

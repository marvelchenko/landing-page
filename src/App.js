import './App.css';
import Analy from './components/Analy';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      < Analy />
      <Services />
      <Platform />
      <Map />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

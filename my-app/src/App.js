import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      {/* Assigning IDs to each section for navigation */}
      <section id="companies">
        <Companies />
      </section>
      <section id="residencies">
        <Residencies />
      </section>
      <section id="our-values">
        <Value />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Testemonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
            <div className='App'>
            
              <Home />
              <About />
              <Work />
              <Testemonials />
              <Contact />
              <Footer />

            </div>
            
);
}

export default App;

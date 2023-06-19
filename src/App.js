import './App.css';
import { AboutUs, Address, Brands, Contact, Footer, Header,Products, Services, Slider, Wapp } from './components';

function App() {
  return (
    <div className="app" id='app'>
      <Header />
      <Slider />
      <Products />
      <Brands />
      <Services />
      <AboutUs />
      <Contact />
      <Address />
      <Footer />
      <Wapp />
    </div>
  );
}

export default App;

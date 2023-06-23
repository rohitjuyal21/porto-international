import './App.css';
import { AboutUs, Address, Brands, Contact, Footer, Header,Products, Services, Slider, Wapp } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <hr />
      <Products />
      <hr />
      <Brands />
      <hr />
      <Services />
      <hr />
      <AboutUs />
      <hr />
      <Contact />
      <Address />
      <Footer />
      <Wapp />
    </div>
  );
}

export default App;

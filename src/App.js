import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Digital from './Components/Digital';
import Branding from './Components/Branding';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Footercontact from './Components/Footercontact';
import Jobpages from './Cmponents/Jobpages';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Digital />
      <Branding />
      <Careers />
      <Contact />
      <Jobpages />

      <Footer />
      <Footercontact />
    </div>
  );
}

export default App;

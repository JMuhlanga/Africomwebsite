import './App.css';
import './Components/Home'
import '/Components/Digital'
import '/Components/Branding'
import '/Components/Careers'
import '/Components/Contact'
import '/Components/Navbar'
import '/Components/Footer'
import '/Components/Footercontact'
import '/Components/Jobpages'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Digital />
      
      <Branding />
      <Careers />
      <Contact />
      <Footer />
      <Footercontact />
      <Jobpages />
    </div>
  );
}

export default App;

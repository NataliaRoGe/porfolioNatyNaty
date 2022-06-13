import './App.css';
import Avataaars from './Components/Avataaars';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';

function App() {
  return (
    <div className="App" id='Inicio'>
      <div className="Separador" id='InformacionPersonal'>
        <p>.</p>
      </div>
      <Header />
      <Section />
     <Avataaars />
      <Footer />
    </div>
  );
}

export default App;
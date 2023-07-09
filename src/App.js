import './App.css';
import Arival from './component/Arival';
import Brand from './component/Brand';
import Section from './component/Section';
import Navbar2 from './component/Navbar2';
import Payday from './component/Payday';
import Yellow from './component/Yellow';
import Young from './component/Young';
import Shopping from './component/Shopping';
import Mobilex from './component/Mobilex';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Section/>
      <Brand/>
      <Arival/>
      <Payday/>
      <Yellow/>
      <Young/>
      <Mobilex/>
      <Shopping/>
      <Footer/>
    </div>
  );
}

export default App;

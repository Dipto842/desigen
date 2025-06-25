
import './App.css';
import Benar from './Benar/Benar';
import Expertis from './Expertise/Expertis';


import Nav from './Navebar/Nav';
import Works from './Works/Works';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav></Nav>
    
      </header>
       <div>
       <Benar></Benar> 
     </div>

      <Expertis></Expertis>
     
    <Works></Works>
    </div>
  );
}

export default App;

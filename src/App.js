
import './App.css';
import Benar from './Benar/Benar';
import Blog from './Blog/Blog';
import Experience from './Experience/Experience';
import Expertis from './Expertise/Expertis';


import Nav from './Navebar/Nav';
import Say from './say/Say';
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

    <Experience></Experience>
    <Blog></Blog>
    <Say></Say>
    </div>
  );
}

export default App;

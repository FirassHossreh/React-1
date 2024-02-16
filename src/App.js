import './App.css';
import Header from './components/Header/Header.js';
import Kart from './components/Kart/Kart.js';
import SideL from './components/SideL/SideL.js';
function App() {
  return (  
    <>
      <Header/>
      <div className='parent-div'>
      <div className='first-div'>
      <Kart/>
      <Kart/>
      <Kart/>
      <Kart/>
      <Kart/>
      </div>
      <div className='seconde-div'>
      <SideL/>
      </div>
    
      </div>
    </>
  );
}


export default App;

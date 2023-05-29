import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
  <Navbar title="Tushar"/>
  <div className="container my-5">
  <Textform heading="Enter your text to edit"/>
  
  </div>
  
    </>  
  );
}

export default App;

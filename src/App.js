import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import './App.css';
import { InputArea } from './InputArea';

function App() {
  return (
    <div className='App-main-container'>
      <div className='App-container'>
        <img className='App-top-picture' src={img1} alt='top-pic'/>
        <h1 className='App-header'>Grocery List</h1>
        <InputArea />

        <img className='App-bottom-picture' src={img2} alt='bottom-pic'/>
      </div>
    </div>
  );
}

export default App;

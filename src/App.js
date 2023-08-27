
import { useState } from 'react';
import './App.css';
import Input from './Input';
import Square from './Square';

function App() {
  const [getColor, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setDarkText] = useState(true)
  

  return (
    <div className="App">
      <Square 
        getColor={getColor}
        isDarkText={isDarkText}
        hexValue={hexValue}
      />
      <Input 
        getColor={getColor}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;

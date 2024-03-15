import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('It always seems impossible, until it\'s done.');
  const apiUrl = "https://api.adviceslip.com/advice";
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(apiUrl);
      if (response === 404){
        setAdvice("Oops!")
      }
      else{
        const data = await response.json();
        setAdvice(data['slip']['advice'])
      }
    }
    fetchData();
  }, []);
  async function handleClick(){
    const response = await fetch(apiUrl);
    if (response === 404){
      setAdvice("Oops!")
    }
    else{
      const data = await response.json();
      setAdvice(data['slip']['advice'])
    }
  }
  return (
    <div className="App">
      <div className="adviceBox">
        <p className="advice">{advice}</p>
        <button className="getAdvice" onClick={handleClick}>Give Advice</button>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  const output = ['2', '3', '4'].forEach((item) => <li>{item}</li>);

  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{JSON.stringify(message)}</p>
      <ul>{output}</ul>
    </div>
  );
}

export default App;

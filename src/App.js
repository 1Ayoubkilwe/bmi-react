import React, { useState } from 'react';
import './App.css';

function App() {
  // Defining state for name, height, mass, and BMI
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [bmi, setBmi] = useState(null);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (height && mass) {
      const heightInMeters = parseFloat(height) / 100;
      const calculatedBmi = (parseFloat(mass) / (heightInMeters ** 2)).toFixed(2);
      setBmi(calculatedBmi);
    }
  };

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your mass (kg)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <h3>Results:</h3>
          <p>Name: {name}</p>
          <p>Height: {height} cm</p>
          <p>Mass: {mass} kg</p>
          <p>BMI: {bmi}</p>
        </div>
      )}
    </div>
  );
}

export default App;

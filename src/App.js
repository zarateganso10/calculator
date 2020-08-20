import React, { useState } from 'react';

import './global.css';


function Calculator() {
  const [result , setResult] = useState(0);
  const [number, setNumber] = useState('');
  const [numberArray, setNumberArray] = useState([]);

  function operator(number1, number2, operator) {
    if(operator === '+'){
      return number1 + number2;
    }

    if(operator === 'x'){
      return number1 * number2;
    }

    if(operator === '-'){
      return number1 - number2;
    }

    if(operator === '/'){
      return number1/number2;
    }
  }

  function handleNumberButton(num) {
    setNumber(number + num);
  }

  function handleOperatorButton(operator) {
    if(numberArray.length === 3) {
      
    }
    numberArray.push(number);
    numberArray.push(operator);
  }

  function handleResultButton() {
    setResult(Number(number));
  }

  function handleDeleteButton() {
    setNumber(number.slice(0, number.length-1));
  }

  return (
    <>
      <main>
        <div className="header-calculator">
          <p>
            {number}
          </p>
          <p>
            {result}
          </p>
        </div>
        <div className="container-buttons">
          <div className="group-buttons">
            <button className="button header-btn">AC</button>
            <button onClick={() => handleNumberButton('7')} className="button header-btn">+/-</button>
            <button onClick={() => handleOperatorButton('/')} className="button header-btn">/</button>
            <button onClick={handleDeleteButton} className="button operator-btn">A</button>
          </div>
          <div className="group-buttons">
            <button onClick={() => handleNumberButton('7')} className="button number-btn">7</button>
            <button onClick={() => handleNumberButton('8')} className="button number-btn">8</button>
            <button onClick={() => handleNumberButton('9')} className="button number-btn">9</button>
            <button onClick={() => handleOperatorButton('x')} className="button operator-btn">x</button>
          </div>
          <div className="group-buttons">
            <button onClick={() => handleNumberButton('4')} className="button number-btn">4</button>
            <button onClick={() => handleNumberButton('5')} className="button number-btn">5</button>
            <button onClick={() => handleNumberButton('6')} className="button number-btn">6</button>
            <button onClick={() => handleOperatorButton('-')} className="button operator-btn">-</button>
          </div>
          <div className="group-buttons">
            <button onClick={() => handleNumberButton('1')} className="button number-btn">1</button>
            <button onClick={() => handleNumberButton('2')} className="button number-btn">2</button>
            <button onClick={() => handleNumberButton('3')} className="button number-btn">3</button>
            <button onClick={() => handleOperatorButton('+')} className="button operator-btn">+</button>
          </div>
          <div className="group-buttons">
            <button onClick={() => handleNumberButton('0')} className="number-btn-0">0</button>
            <button onClick={() => handleNumberButton('.')} className="button number-btn">.</button>
            <button onClick={handleResultButton} className="button operator-btn">=</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Calculator;

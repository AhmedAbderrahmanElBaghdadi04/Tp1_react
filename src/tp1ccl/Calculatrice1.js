import React, { useState } from 'react';
import './ap1.css';

function Calculatrice1() {
  const [display, setDisplay] = useState('0');

  const handleInput = (input) => {
    if (display === '0' && input !== 'C') {
      setDisplay(input);
    } else if (input === 'C') {
      setDisplay('0');
    } else {
      setDisplay(display + input);
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input
          type="text"
          className="display"
          value={display}
          readOnly
        />
        <div className="keys">
          <div className="row">
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button className='tosawi' onClick={calculate}>=</button>

          </div>
          <div className="row">
            <button onClick={() => handleInput('2')}>2</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('0')}>0</button>
          </div>
          <div className="row">
            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('.')}>.</button>
           
          </div>
          <div className="row">
            <button onClick={() => handleInput('+')}>+</button>
            <button onClick={() => handleInput('-')}>-</button>
            <button onClick={() => handleInput('*')}>*</button>
            <button onClick={() => handleInput('/')}>/</button>
          </div>
          <div className="row">
            <button className='clear' onClick={() => handleInput('C')}>C</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculatrice1;

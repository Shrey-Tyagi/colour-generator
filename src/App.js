import { useState } from 'react';
import Values from 'values.js';
import './App.css';
import SingleColor from './SingleColor';

function App() {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [colourValue, setColourValue] = useState(
    new Values('#f15025').all(10)
  );

  const handlerSubmit = (e) => {
    e.preventDefault();
    try {
      setColourValue(new Values(inputValue).all(10));
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="App">
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn"
            onClick={handlerSubmit}
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colourValue.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;

import { useState } from "react";
import CalculatorButton from "../../components/Button";
import { BUTTON_CONSTANT } from "./buttonConstant";

export default function CalculatorPage() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));

  }

  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err) {
      setResult("Error")
    }
    
  }

  const handleOperation= (type, event = null) => {
      switch (type) {
          case 'clear_button': clear()
          break;
          case 'back_button': backspace()
          break;
          case 'operation_button': handleClick(event)
          break;
          case 'calculate_button': calculate(event)
          break;
          default: break;
      }
  }
    
    return <><div className='container'>
    <form>
      <input type="text" value={result} />
    </form>

    <div className="keypad">
      {BUTTON_CONSTANT.map((element) => {
          return <CalculatorButton classMethod={element.classLabel} name={element?.name} id={element.id} label={element.label} method={(event) => handleOperation(element.type, event)} />
      })}
      
      
      {/* <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button className="highlight" name="*" onClick={handleClick}>&times;</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button className="highlight" name="+" onClick={handleClick}>+</button>
      <button name="0" onClick={handleClick}>0</button>
      <button name="." onClick={handleClick}>.</button>
      <button className="highlight" onClick={calculate} id="result">=</button> */}

    </div>
  </div></>
}
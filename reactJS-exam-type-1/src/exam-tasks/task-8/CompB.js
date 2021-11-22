import {useContext} from 'react';
import {CounterContext} from "./CounterContext";


function CompB() {
    const {handleIncrement} =useContext((CounterContext))
  return (
    <div>

      <h4>CompB  <button style={{backgroundColor:"blue", color:"white"}} onClick={handleIncrement}>Inc +10</button></h4>

    </div>
  );
}

export default CompB;

import {useContext} from 'react';
import {CounterContext} from "./CounterContext";
function CompA1() {
    const {handleDecrement} =useContext((CounterContext))


  return (
    <div>
      <h5>CompA1 <button style={{backgroundColor:"red", color:"white" }} onClick={handleDecrement}>Dec -10 </button></h5>

    </div>
  );
}

export default CompA1;

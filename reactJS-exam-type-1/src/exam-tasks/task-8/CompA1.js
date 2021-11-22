import {useContext} from 'react';
import {CounterContext} from "./CounterContext";
function CompA1({name}) {
    const {handleDecrement} =useContext((CounterContext))


  return (
    <div>
      <h5>CompA1 <button onClick={handleDecrement}>Dec -10 </button></h5>

    </div>
  );
}

export default CompA1;

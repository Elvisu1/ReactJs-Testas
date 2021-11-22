import {useState} from 'react';

function CompA1({name}) {
    const [count, setCount] = useState(10);
    const handleDecrement = () => {
        setCount(count -10);
    }
  return (
    <div>
      <h5>CompA1 <button onClick={handleDecrement}>Dec -10 </button></h5>

    </div>
  );
}

export default CompA1;

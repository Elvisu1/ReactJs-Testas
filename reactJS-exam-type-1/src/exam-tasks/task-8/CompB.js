import {useState} from 'react';

function CompB() {
    const [count, setCount] = useState(10);
    const handleIncrement = () => {
        setCount(count +10);
    }
  return (
    <div>

      <h4>CompB  <button onClick={handleIncrement}>Inc +10</button></h4>

    </div>
  );
}

export default CompB;

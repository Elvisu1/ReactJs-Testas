import {useState} from 'react';
import CompA1 from './CompA1';

function CompA() {
    const [count, setcount] = useState(0)
  return (
    <div>
      <h4>CompA</h4>
        <h2>{count}</h2>
      <CompA1 name={count} />
    </div>
  );
}

export default CompA;

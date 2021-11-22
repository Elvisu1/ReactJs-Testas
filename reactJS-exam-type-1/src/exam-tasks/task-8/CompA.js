import {useContext} from 'react';
import CompA1 from './CompA1';
import {CounterContext} from "./CounterContext";

function CompA() {
const {count} =useContext((CounterContext))
  return (
    <div>
      <h4>CompA</h4>
        <h2>{count}</h2>
      <CompA1  />
    </div>
  );
}

export default CompA;

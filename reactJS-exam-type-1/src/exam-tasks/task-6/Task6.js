import React from 'react';
import Fetch from "./component/Fetch";


function Task6() {
  return (
    <div>
      <h3>Task 6</h3>
        <Fetch/>
    </div>
  );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/

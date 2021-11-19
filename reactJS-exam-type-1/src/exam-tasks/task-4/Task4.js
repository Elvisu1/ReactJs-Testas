import React from 'react';
import LikeCounter from "./components/LikeCounter";

function Task4() {
  return (
    <div>
      <h3>Task 4</h3>
        <LikeCounter/>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, leidžiama balsuoti, tik vieną kartą.
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/

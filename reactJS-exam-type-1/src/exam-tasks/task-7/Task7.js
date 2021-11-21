import React from 'react';
import {useState} from "react";
const lightTheme = {
    body: '#f1f1f1',
    fontcolor: '#0000'
}
const darkTheme = {
    body: '#000000',
    fontcolor: '#f1f1f1'
}
function Task7() {
  return (
    <div>
      <h3>Task 7</h3>
        <div>
            <h1>This is my text</h1>
            <p>How can i change theme ?</p>
            <button>Light Theme</button>
            <button>Dark theme</button>
        </div>
    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/

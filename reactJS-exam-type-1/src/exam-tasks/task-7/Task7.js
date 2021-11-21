import React from 'react';
import {useState} from "react";
import {LightTheme, DarkTheme, GlobalStyles} from "./components/themes";




import styled, {ThemeProvider } from "styled-components";

const StyledApp = styled.div`
    color:${(props) => props.theme.fontcolor};
    
`

function Task7() {
    const [theme, setTheme] = useState("light");
    const themeTogglerLight = () => {
        theme === "dark" ? setTheme("light"):setTheme("light");
    };
    const themeTogglerDark = () => {
        theme === "light" ? setTheme("dark"):setTheme("dark");

    };

  return (
    <div>
      <h3>Task 7</h3>
        <ThemeProvider theme ={theme === "light" ? LightTheme : DarkTheme}>

                <GlobalStyles/>
                <StyledApp>
                    <h1>This is my text</h1>
                    <p>How can i change theme ?</p>
                    <button onClick={() => themeTogglerLight()} >Light Theme</button>
                    <button onClick={() => themeTogglerDark()}>Dark theme</button>
                </StyledApp>




        </ThemeProvider>

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

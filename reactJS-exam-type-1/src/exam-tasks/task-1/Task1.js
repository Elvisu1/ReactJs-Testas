import React from 'react';
import Contacts from "./Pages/Contacts";
import AboutUs from "./Pages/AboutUs";
import styled from 'styled-components'
import {Route, Link} from "react-router-dom";

const Div = styled.div`
height: 30vh;
`
const Nav = styled.nav`
  width: 60vh;
  height: 50px;
  background-color: blue;

`
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 20px;
  
`
function Task1() {
  return (
    <Div>
      <h3>Task 1</h3>
<Nav>
    <NavLink to='/AboutUs'>About Us</NavLink>
    <NavLink to='/Contacts'>Contacts</NavLink>
    <Route path='/AboutUs'>

        <AboutUs/>
    </Route>

    <Route path='/Contacts'>
        <Contacts/>
    </Route>
</Nav>

    </Div>
  );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages".
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją,
kuri leis patekti į nurodytus "Pages" puslapių komponentus.
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/

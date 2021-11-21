import React from 'react';
import Logo from './assets/images/logo.png'
import css from './style.module.css'
import Button from "./components/Button";

function Task5() {
  return (
    <div>
      <h3>Task 5</h3>
        <div className={css.div}>
           <img className={css.img} src={Logo}/>
            <h1 className={css.h1}>Happening now</h1>
            <h2 className={css.h2}>Join Twitter today.</h2>
            <div className={css.buttons}>
                <Button style={{color:"white",
                    backgroundColor:"#00acee",
                    cursor:"pointer",
                    border:"none",marginBottom:"15px",padding:"10px",
                    borderRadius:"15px", width:"300px"}}
                        name='Sign up'></Button>

                <Button style={{color:"#00acee",
                    cursor:"pointer",

                    backgroundColor:"white",
                    border:"1px solid #00acee",padding:"10px",
                    borderRadius:"15px", width:"300px"}}
                        name='Log in'></Button>
            </div>

        </div>
    </div>
  );
}

export default Task5;

/* Task 5
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/

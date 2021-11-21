import React from 'react';
import Logo from './assets/images/logo.png'
import css from './style.module.css'

function Task5() {
  return (
    <div>
      <h3>Task 5</h3>
        <div className={css.div}>
           <img className={css.img} src={Logo}/>
            <h1 className={css.h1}>Happening now</h1>
            <h2 className={css.h2}>Join Twitter today.</h2>
            <div className={css.buttons}>
                <button >Sign up</button>
                <button>Log in</button>
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

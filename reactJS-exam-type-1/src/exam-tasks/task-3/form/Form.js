import {useState} from "react";
import css from './Form.module.css'

function Form(){
    const [values, setValues] = useState({
        name: "",
        surname: "",
        age: "",
    });
    const [submitted, setSubmitted ] = useState(false)
    const handleName = (event) =>{
        setValues({...values, name: event.target.value})
    }
    const handleSurname = (event) =>{
        setValues({...values, surname: event.target.value})
    }
    const handleAge = (event) =>{
        setValues({...values, age: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if(values.age <18){
            setSubmitted(false)
            alert("Deja, registracija negalima.\n" +
                "Registruotis galima tik nuo 18 metų")

        }
    }
    return(
        <form className={css.form} onSubmit={handleSubmit}>
<h2> Registration Form</h2>
            <div>

                <input className={css.input} placeholder='name' onChange={handleName} value={values.name} type="text" required />
            </div>
            <div>

                <input className={css.input} placeholder='surname' onChange={handleSurname} value={values.surname} type="text" required />
            </div>
            <div>

                <input className={css.input} placeholder='age' onChange={handleAge} value={values.age} type="number" required />
            </div>
            <input className={css.button} type="submit" value="Submit"/>
            {submitted ? <div className={css.text}>
                Dėkojame, kad užsiregistravote!
            </div> : null}


        </form>
    )
}
export default Form

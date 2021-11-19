import {useState} from "react";

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
        <form onSubmit={handleSubmit}>

            <div>
                <label>Name</label>
                <input onChange={handleName} value={values.name} type="text" required />
            </div>
            <div>
                <label>Surname</label>
                <input onChange={handleSurname} value={values.surname} type="text" required />
            </div>
            <div>
                <label>Age</label>
                <input onChange={handleAge} value={values.age} type="number" required />
            </div>
            <input type="submit" value="Submit"/>
            {submitted ? <div>
                Dėkojame, kad užsiregistravote
            </div> : null}


        </form>
    )
}
export default Form

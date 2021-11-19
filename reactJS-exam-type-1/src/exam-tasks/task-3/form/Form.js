import React, {useState} from "react";
function Form(){
    return(
        <form>
            <div>
                <label>Name</label>
                <input type="text" required />
            </div>
            <div>
                <label>Surname</label>
                <input type="text" required />
            </div>
            <div>
                <label>Age</label>
                <input type="number" required />
            </div>
            <input type="submit" value="Submit"/>

        </form>
    )
}
export default Form

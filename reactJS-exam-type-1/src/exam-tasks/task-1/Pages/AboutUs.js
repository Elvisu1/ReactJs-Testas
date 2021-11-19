import styled from "styled-components";
import {NavLink} from "react-router-dom";
const Div = styled.div`
text-align: center;
`

function AboutUs(){
    return (
        <Div>
            <br/>
            <h1>About US</h1>
            <NavLink to='/'>Grįžti atgal</NavLink>
        </Div>

    )
}
export default AboutUs

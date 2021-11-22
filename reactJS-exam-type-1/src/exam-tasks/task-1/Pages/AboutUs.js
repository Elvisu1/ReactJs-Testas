import styled from "styled-components";
import {NavLink} from "react-router-dom";
const Div = styled.div`
  margin: 50px;
  text-align: center;
  
`

function AboutUs(){
    return (
        <Div>
            <h1>About US</h1>
            <NavLink to='/'>Grįžti atgal</NavLink>
        </Div>

    )
}
export default AboutUs

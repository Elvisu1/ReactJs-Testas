import {createGlobalStyle} from "styled-components";


export const LightTheme = {
    body: '#ffffff',
    fontcolor: 'black'
};
export const DarkTheme = {
    body: '#000000',
    fontcolor: '#f1f1f1'
};

export const GlobalStyles = createGlobalStyle`
div{
  background-color:${(props) => props.theme.body};
}

`


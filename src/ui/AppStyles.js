import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Avenir';
    font-style: medium;
    font-weight: 400;
    src: url('../public/assets/typeface/Avenir/AvenirLTStd-Book.otf);
}
body {
 font-family: 'Avenir';  
}
`
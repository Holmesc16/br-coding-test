import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Avenir Next';
    font-style: medium;
    font-weight: 400;
    src: url('../public/assets/typeface/Avenir/AvenirNext-Regular.tff');
}
@font-face {
    font-family: 'Avenir Next Bold';
    font-weight: 600;
    src: url('../public/assets/typeface/Avenir/AvenirNext-Bold.tff');

}
@font-face {
    font-family: 'Avenir Next DemiBold';
    font-weight: 600;
    src: url('../public/assets/typeface/Avenir/AvenirNext-DemiBold.tff');

}
body {
 font-family: 'Avenir Next';  
}
`
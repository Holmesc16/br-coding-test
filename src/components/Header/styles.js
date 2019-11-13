import styled from 'styled-components'

const textColor = '#ffffff';
const primaryColor = '#43E895';
    
export const StyledHeader = styled.nav`
background-color:${primaryColor};
display: grid;
grid-template-columns: 1fr 5fr 1fr;
text-align:center;
color:${textColor};
font-size:17px;
align-items: center;
`
export const StyledTitle = styled.h1`
font-weight:400;
font-size:${props => props.size};
`
export const StyledIcon = styled.img`
src: ${props => props.src};
width: ${props => props.size || '20px'};
margin:20px;
float: ${props => props.float}
`
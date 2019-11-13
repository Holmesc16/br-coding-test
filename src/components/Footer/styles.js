import styled from 'styled-components'
const footerBackgroundColor = '#2A2A2A'

export const StyledFooter = styled.footer`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background: ${footerBackgroundColor};
    position: fixed;
    bottom: 0;
    width:100%;
    justify-content: center;
    align-items: center;

    .icon-right > img {
        align-items: right;
    }

    .icon-left > img {
        float: left;    
    }
`
export const StyledIcon = styled.img`
src: ${props => props.src};
width: ${props => props.size || '20px'};
margin:20px;
float: ${props => props.float}
`
import styled from 'styled-components'

export const StyledWrapper = styled.div`
display: ${props => props.show}
`
export const StyledLabel = styled.div`
background: #34B379;
position: absolute;
top: ${props => props.top};
width: ${props => props.width};
z-index: 1;
color: white;
height: ${props => props.height};
vertical-align: middle;
text-align: left;
display: ${props => props.show}
    div {
        &:first-child {
            margin-top:22px;
            font-size:larger;
        }
    }
    p {
        margin-left: 12px;
        margin-bottom: 6px;
        margin-top: 6px;
        font-size:${props => props.fontSize};

        &:first-child {
            font-weight:bold;
            margin-top: 10px;
        }
    }
    
`

export const StyledDetailSection = styled.div`
position: absolute;
top: ${props => props.top}; //200px;
width: ${props => props.width}; //50%;
height: fit-content;
display: ${props => props.show};
margin-top: ${props => props.marginTop || '16px'}
    .restaurant-info {
        margin-left:12px;
    }

    .address {
        margin-top:16px;
    }

    .phone {
        margin-top:26px;
    }

    .twitter {
        margin-top: 26px;

        a {
            color: inherit;
            text-decoration:none;
        }
    }
`
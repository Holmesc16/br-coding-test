import styled from 'styled-components'

export const StyledWrapper = styled.div`
display: ${props => props.show}
`

export const StyledLabel = styled.div`
background: #34B379;
position: absolute;
top: 80px;
width: 50%;
z-index: 1;
color: white;
height: 120px;
vertical-align: middle;
text-align: left;

    h1, p {
     margin-left:18px;
     margin-bottom:4px;   
    }

    p {
        margin-top:2px;
        font-size:20px;
    }
`

export const StyledDetailSection = styled.div`
position: absolute;
top: 200px;
width: 50%;
height: fit-content;

    .restaurant-info {
        margin-left:22px;
    }

    .address {
        margin-top:26px;
    }

    .twitter {
        margin-top: 18px;
    }
`
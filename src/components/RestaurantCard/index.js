import React from 'react'
import { StyledContainer } from './styles'

const RestaurantCard = props => {
    return (
    <StyledContainer onClick={props.onClick}>
         <div className="text restaurant-info">
            <h1 style={{'display': props.detail === true ? 'none' : 'inherit'}} width={props.width} className="text restaurant-name">{props.name}</h1>
            <p style={{'display': props.detail === true ? 'none' : 'inherit'}} width={props.width} className="text restaurant-cat">{props.category}</p>
        </div>
        <img className="img restaurant-image" src={props.src} alt="restaurant"/>
        <img className="img gradient" src="assets\cuts\cellGradientBackground@2x.png" alt="gradient"/>
    </StyledContainer>
    )
}

export default RestaurantCard
import React, {useState, useEffect} from 'react'
import { StyledContainer } from './styles'

const RestaurantCard = props => {
    return (
    <StyledContainer>
         <div className="text restaurant-info">
            <h1 className="text restaurant-name">{props.name}</h1>
            <h4 className="text restaurant-cat">{props.category}</h4>
        </div>
        <img className="img restaurant-image" src={props.src} alt="restaurant"/>
        <img className="img gradient" src="assets\cuts\cellGradientBackground@2x.png" alt="gradient"/>
    </StyledContainer>
    )
}

export default RestaurantCard
import React from 'react'
import Map from '../../components/Map'
import { StyledWrapper, StyledLabel, StyledDetailSection } from './styles'

const singleColumnLayout = props => {
    return (
        <StyledWrapper show={props.show === true ? 'contents' : 'none'}>
            <div className="row">
                <div className="column">
                    <div className="single-column">
                    <StyledLabel>
                        <h1>{props.restaurant.name}</h1>
                        <p>{props.restaurant.category}</p>
                    </StyledLabel>
                    <StyledDetailSection>
                        <div className="restaurant-info address">
                            <h3>
                            {props.restaurant.location ? props.restaurant.location.address : ''}<br/>
                            {props.restaurant.location ? props.restaurant.location.city : ''}, {props.restaurant.location ? props.restaurant.location.state : ''}
                            </h3>
                        </div>
                        <div className="restaurant-info phone">{props.restaurant.contact ? props.restaurant.contact.formattedPhone : ''}</div>
                        <div className="restaurant-info twitter"><a href="http://www.google.com">{props.restaurant.contact ? props.restaurant.contact.twitter !== undefined ? `@${props.restaurant.contact.twitter}` : '' : ''}</a></div>
                    </StyledDetailSection>
                    <Map lat={props.restaurant.location ? props.restaurant.location.lat : 32.95} lng={props.restaurant.location ? props.restaurant.location.lng : -96.82}/>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const Detail = props => {
        return (
            <div>
                {singleColumnLayout(props)}
            </div>
        )
}

export default Detail
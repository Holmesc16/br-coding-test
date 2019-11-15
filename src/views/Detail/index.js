import React from 'react'
import Map from '../../components/Map'
import { StyledWrapper, StyledLabel, StyledDetailSection } from './styles'

const largeLayout = props => {
    return (
        <StyledWrapper show={props.show === true ? 'initial' : 'none'}>
            <div className="row">
                <div className="column">
                    <div className="single-column">
                    <StyledLabel show={props.show === true ? 'initial' : 'none'} top='80px' width='50%' height='120px'>
                        <div>
                            <p fontSize='24px' fontWeight='bold'>{props.restaurant.name}</p>
                            <p fontSize='20px' fontWeight='normal'>{props.restaurant.category}</p>
                        </div>
                    </StyledLabel>
                    <StyledDetailSection show={props.show === true ? 'initial' : 'none'} top='200px' width='50%'>
                        <div className="restaurant-info address">
                            {props.restaurant.location ? props.restaurant.location.address : ''}<br/>
                            {props.restaurant.location ? props.restaurant.location.city : ''}, {props.restaurant.location ? props.restaurant.location.state : ''}
                        </div>
                        <div className="restaurant-info phone">{props.restaurant.contact ? props.restaurant.contact.formattedPhone : ''}</div>
                        <div className="restaurant-info twitter"><a href="http://www.google.com">{props.restaurant.contact ? props.restaurant.contact.twitter !== undefined ? `@${props.restaurant.contact.twitter}` : '' : ''}</a></div>
                    </StyledDetailSection>
                    <Map width={props.width} lat={props.restaurant.location ? props.restaurant.location.lat : 32.95} lng={props.restaurant.location ? props.restaurant.location.lng : -96.82}/>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const smallLayout = props => {
    return (
        <StyledWrapper show={props.show === true ? 'initial' : 'none'}>
            <Map width={props.width} lat={props.restaurant.location ? props.restaurant.location.lat : 32.95} lng={props.restaurant.location ? props.restaurant.location.lng : -96.82}/>
            <StyledLabel show={props.show === true ? 'initial' : 'none'} top='324px' width='100%' height='68px'>
                        <p fontSize={props.width >= 768 ? '24px' : '16px'} fontWeight='bold'>{props.restaurant.name}</p>
                        <p fontSize={props.width >= 768 ? '20px' : '20px'} fontWeight='normal'>{props.restaurant.category}</p>
                    </StyledLabel>
                    <StyledDetailSection show={props.show === true ? 'initial' : 'none'} top='376px' width='100%'>
                        <div className="restaurant-info address">
                            {props.restaurant.location ? props.restaurant.location.address : ''}<br/>
                            {props.restaurant.location ? props.restaurant.location.city : ''}, {props.restaurant.location ? props.restaurant.location.state : ''}
                        </div>
                        <div className="restaurant-info phone">{props.restaurant.contact ? props.restaurant.contact.formattedPhone : ''}</div>
                        <div className="restaurant-info twitter"><a href="http://www.google.com">{props.restaurant.contact ? props.restaurant.contact.twitter !== undefined ? `@${props.restaurant.contact.twitter}` : '' : ''}</a>
                        </div>
                    </StyledDetailSection>
        </StyledWrapper>
        )
}

const Detail = props => {
        return (
            <div>
                {props.width >= 768 ?
                 largeLayout(props) : 
                 smallLayout(props)}
            </div>
        )
}

export default Detail
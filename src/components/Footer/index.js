import React, { useState } from 'react'
import {StyledFooter, StyledIcon} from './styles'
const Footer = props => {
    return (
        <StyledFooter>
            <StyledIcon className="icon-right" align="right" src="assets/cuts/tab_lunch@2x.png"/>
            <StyledIcon className="icon-left" align="left" src="assets/cuts/tab_internets@2x.png"/>
        </StyledFooter>
    )
}

export default Footer
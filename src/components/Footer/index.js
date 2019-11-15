import React from "react";
import {
  StyledFooter,
  StyledIconContainer,
  StyledFooterSection,
  StyledFooterIcon,
  StyledFooterLabel
} from "./styles";
const Footer = props => {
  return (
    <StyledFooter size={props.show}>
      <StyledIconContainer>
        <StyledFooterSection>
          <StyledFooterIcon src="assets\cuts\tab_lunch@2x.png" style={{'display': props.show === false ? 'none' : 'inherit'}}/>
          <StyledFooterLabel style={{'display': props.show === false ? 'none' : 'inherit'}}>lunch</StyledFooterLabel>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterIcon src="assets\cuts\tab_internets@2x.png" style={{'display': props.show === false ? 'none' : 'inherit'}}/>
          <StyledFooterLabel style={{'display': props.show === false ? 'none' : 'inherit'}}>internets</StyledFooterLabel>
        </StyledFooterSection>
      </StyledIconContainer>
    </StyledFooter>
  );
};

export default Footer;
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
          <StyledFooterIcon src="assets\cuts\tab_lunch@2x.png" />
          <StyledFooterLabel>lunch</StyledFooterLabel>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterIcon src="assets\cuts\tab_internets@2x.png" />
          <StyledFooterLabel>internets</StyledFooterLabel>
        </StyledFooterSection>
      </StyledIconContainer>
    </StyledFooter>
  );
};

export default Footer;
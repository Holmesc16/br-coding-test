import React, {useState} from "react";
import { StyledHeader, StyledIcon, StyledTitle } from "./styles";

const Header = props => {
  return (
    <StyledHeader>
      <div>
        <StyledIcon 
        style={{ display: props.showBackButton ? 'contents' : 'none'}}
          src="assets/cuts/ic_webBack@2x.png"
          size="15px"
        />
      </div>
      <div>
        <StyledTitle size={window.innerWidth > 924 ? "20px" : "15px"}>
          Lunch Tyme
        </StyledTitle>
      </div>
      <div>
        <StyledIcon src="assets/cuts/icon_map@2x.png" size="40px" />
      </div>
    </StyledHeader>
  );
};

export default Header;
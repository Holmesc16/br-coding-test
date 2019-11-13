import React from "react";
import { StyledHeader, StyledIcon, StyledTitle } from "./styles";

const Header = props => {
  return (
    <StyledHeader>
      <div>
        <StyledIcon
          src="assets/cuts/ic_webBack@2x.png"
          size="15px"
        />
      </div>
      <div>
        <StyledTitle size={window.innerWidth > 924 ? "24px" : "17px"}>
          Lunch Tyme
        </StyledTitle>
      </div>
      <div>
        <StyledIcon src="assets/cuts/icon_map@2x.png" size="30px" />
      </div>
    </StyledHeader>
  );
};

export default Header;
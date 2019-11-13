import styled from "styled-components";

const textColor = "#ffffff";
const primaryColor = "#43E895";

export const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  text-align: center;
  color: ${textColor};
  font-size: 17px;
  align-items: center;
  width:100%;
  position: fixed;
  z-index: 9999;
`;
export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size:${() => window.innerWidth > 767 ? '30px' : '24px'};;
`;
export const StyledIcon = styled.img`
  src: ${props => props.src};
  width: ${props => props.size || "20px"};
  margin: 20px;
`;
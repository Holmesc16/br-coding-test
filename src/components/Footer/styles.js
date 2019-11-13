import styled from "styled-components";

const footerBackgroundColor = "#2A2A2A";
const footerTextColor = "#FFFFFF";

export const StyledFooter = styled.footer`
    background: ${footerBackgroundColor};
    position: fixed;
    bottom: 0;
    width:100%;
    z-index: 9999;
        }
`;
export const StyledIconContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;
export const StyledFooterSection = styled.div`
  color: ${footerTextColor};
  margin: 0 15%;
`;
export const StyledFooterIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 7px auto;
  display: block;
  src: ${props => props.src};
`;
export const StyledFooterLabel = styled.div`
  text-align: center;
  width: 100%;
`;
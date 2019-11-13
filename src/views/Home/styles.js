import styled from 'styled-components'

export const StyledWrapper = styled.div`
    min-height: 100%;
    padding-bottom:79px;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 75px;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  
@media screen and (max-width: 768px) {
    .column {
      flex: 2;
      height:100%;
    }
  }

  @media screen and (min-width: 768px) {
    .column {
      flex: 1;
      height:100%;
    }
  }
`  
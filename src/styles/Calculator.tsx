import styled from "styled-components";

const Calculator = styled.main`
  align-items: flex-start;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  margin: 3rem auto 0 auto;
  padding: 0px 20px;
  width: 540px;
   @media(max-width: 768px) {
    width: 375px;
   }

  > header {
    align-self: flex-start;
    color: ${(props) => props.theme.colors.main};
    font-size: 18px;
    font-weight: bold;
  }

  .display {
   @media(max-width: 768px) {
   }
  }

  .buttons {
    background: ${(props) => props.theme.colors.calculator};
  
`;

export default Calculator;

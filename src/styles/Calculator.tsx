import styled from "styled-components";

const Calculator = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin: 4rem auto 0 auto;
  width: 540px;

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

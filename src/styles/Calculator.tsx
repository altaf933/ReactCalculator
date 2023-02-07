import styled from "styled-components";

const Calculator = styled.main`
  align-items: center;
  border-radius: 10px 10px 50px 50px;
  display: flex;
  flex-flow: column nowrap;
  margin: 4rem auto 0 auto;
  width: 540px;

  > header {
    align-self: flex-start;
    color: ${(props) => props.theme.colors.main};
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  .display {
    margin-bottom: 30px;
    width: 100%;
  }

  .buttons {
    background: ${(props) => props.theme.colors.calculator};
  
`;

export default Calculator;

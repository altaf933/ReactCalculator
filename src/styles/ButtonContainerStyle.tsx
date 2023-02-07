
import styled from "styled-components";

const ButtonContainerStyle = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.displayBorder};
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 30px 10px 30px 10px;
  flex-direction: column;
  > div {
    background: ${(props) => props.theme.colors.display};
    border-radius: 10px;
    flex: 1;
    padding: 0px 8px;
    text-align: right;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 37px;
    color: #434A59;
    letter-spacing: -0.666667px;
  }
   div:nth-child(4) {
    color: #ffffff;
    font-size: 28px;
   }
`;

export default ButtonContainerStyle;

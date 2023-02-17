
import styled from "styled-components";

const ButtonContainerStyle = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.displayBorder};
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 23px 20px 23px 20px;
   @media(max-width: 768px) {
  padding: 20px 10px 20px 10px;
   }
  flex-direction: column;
  > div {
    border-radius: 10px;
    flex: 1;
    text-align: right;
  }
   div:nth-child(4) {
    color: #ffffff;
    font-size: 28px;
   }
`;

export default ButtonContainerStyle;

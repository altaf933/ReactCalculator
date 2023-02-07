import styled from "styled-components";

const DisplayStyle = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.displayBorder};
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 50px 30px; 
  > div {
    background: ${(props) => props.theme.colors.display};
    border-radius: 10px;
    flex: 1;
    padding: 0px 8px;
    text-align: right;
    font-family: 'League Spartan';
    color: #FFFFFF;
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 52px;
letter-spacing: -0.933333px;
  }
`;

export default DisplayStyle;

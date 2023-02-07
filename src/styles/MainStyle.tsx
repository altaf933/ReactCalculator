import styled from "styled-components";

const MainStyle = styled.main`
  align-items: center;
  background: ${(props) => props.theme.colors.calculator};
  border-radius: 10px 10px 50px 50px;
  display: flex;
  flex-flow: column nowrap;
  margin: 4rem auto 0 auto;
  padding: 50px;
  width: 450px;
  `;

export default MainStyle;

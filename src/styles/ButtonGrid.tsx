
import styled from "styled-components";
import number_btn from '../images/number_btn.png';
import del from '../images/del.png';
const ButtonGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  > * {
    justify-content: center;
    align-items: center;
  }
   div:nth-child(4) {
   background-image: url(${del});
  }
`;

export default ButtonGrid;

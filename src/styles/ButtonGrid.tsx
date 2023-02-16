
import styled from "styled-components";
import del from '../images/del.png';
import mobileBlueButton from '../images/mobileBlueButton.png';
const ButtonGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 37px;
    color: #434A59;
    letter-spacing: -0.666667px;
  > * {
    justify-content: center;
    align-items: center;
  }
   div:nth-child(4) {
   background-image: url(${del});
   @media(max-width: 768px) { 
   background-image: url(${mobileBlueButton});
   }
  }
`;

export default ButtonGrid;

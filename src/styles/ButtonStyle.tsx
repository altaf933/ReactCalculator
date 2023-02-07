
import styled from "styled-components";
import number_btn from '../images/number_btn.png';
import red_rect from '../images/red_rect.png';
import blue_rect from '../images/blue_rect.png';

export const ButtonStyle = styled.div`
    width: 101px;
   height: 64px;
   margin: 13px 12px;
   display: flex;
   background-image: url(${number_btn});
`;

export const ResetButton = styled.div`
    width: 227px;
   height: 64px;
   margin: 10px;
   display: flex;
   background-image: url(${red_rect});
`;
export const EqualButton = styled.div`
    width: 227px;
   height: 64px;
   margin: 10px;
   display: flex;
   background-image: url(${blue_rect});
`;

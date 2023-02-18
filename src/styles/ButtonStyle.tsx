
import styled from "styled-components";
import number_btn from '../images/number_btn.png';
import red_rect from '../images/red_rect.png';
import blue_rect from '../images/blue_rect.png';
import mobileGrayButton from '../images/mobileGrayButton.png';
import rectangleRed from '../images/rectangleRed.png';
import rectangleBlueMobile from '../images/rectangleBlueMobile.png';

export const ButtonStyle = styled.div`
    width: 101px;
   height: 64px;
   margin: 13px 12px;
   display: flex;
   background-image: url(${props => props.theme.buttonImages});
   @media(max-width: 768px) {
   background-image: url(${props => props.theme.buttonMobile});
    width: 60px;
    height: 64px;
   margin: 8px 8px;
   display: flex;
   }
`;

export const ResetButton = styled.div`
    width: 227px;
   height: 64px;
   display: flex;
   margin: 0px 21px 0px 5px;
   background-image: url(${props => props.theme.resetDeskButton});
   @media(max-width: 768px) {
   width: 133px;
   height: 64px;
   background-image: url(${props => props.theme.resetMobileButton});
   margin: 0px 21px 0px 0px;
   }
`;

export const LongButtonContainer = styled.div`

font-family: 'League Spartan';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.466667px;
color: #FFFFFF;
    padding: 5px 8px;
@media(max-width: 768px) {
    padding: 0px 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    margin: 5px 0px;
    color: #FFFFFF;
    letter-spacing: -0.333333px;
   }
`;
export const EqualButton = styled.div`
    width: 227px;
   height: 64px;
   display: flex;
   background-image: url(${props => props.theme.equalDeskButton});
   @media(max-width: 768px) {
   width: 133px;
   height: 64px;
   background-image: url(${props => props.theme.equalMobileButton});
   }
`;

import styled from "styled-components";
export const ToggleView = styled.div`
  display: inline-block;
  width: 71px;
  height: 26px;
  border-radius: 13px;
  position:absolute;
  background: ${(props) => props.theme.colors.displayBorder};
  bottom: 0%;
    right: 0%;
  input {
  position: absolute;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
   &:checked + label {
      transition: 0.1s;
      background:#F96B5B;
   }
  }
   @media(max-width: 768px) {
  bottom: 0%;
    right: 0%;
   }
  label {
  height: 16px;
  width: 16px;
  margin: 3px;
  top: 5%;
  left: 4%;
  line-height: 21px;
  border-radius: 50%;
  display:inline-block;
  position:relative;
  }
`;
export const ToggleNumber = styled.div`
  display: inline-block;
  position:absolute;
        top: -15%;
        right: 1%;
@media(max-width: 768px) {
   }
  label {
    font-family: 'Spartan';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 13px;
text-align: center;
    color: ${(props) => props.theme.colors.displayFontColor};
  height: 16px;
  width: 16px;
  margin: 3px;
  line-height: 21px;
  display:inline-block;
  position:relative;
  }
`;
export const ThemeLabel = styled.div`
  display: inline-block;
  position:absolute;
  font-family: 'League Spartan';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 11px;
/* identical to box height */
text-align: center;
letter-spacing: 1px;
color: #FFFFFF;
text-align: center;
    top: 60%;
    right: 20%;
    color: ${(props) => props.theme.colors.displayFontColor};
@media(max-width: 768px) {
    top: 60%;
    right: 30%;
   }
  label {
  height: 16px;
  width: 16px;
  margin: 3px;
  line-height: 21px;
  display:inline-block;
  position:relative;
  }
  `;
export const CalcText = styled.div`
  display: inline-block;
  font-family: 'League Spartan';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 29px;
text-align: center;
letter-spacing: -0.533333px;
color: ${(props) => props.theme.colors.displayFontColor};
  `;

export const TopContainer = styled.div`
     display: flex;
     position: relative;
     height: 42px;
  width: 540px;
  padding-top: 10px;
   @media(max-width: 768px) {
     width: 320px;
   }
  `;

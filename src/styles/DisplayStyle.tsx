import styled from "styled-components";

export const DisplayStyle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 24px 0px;
  > div {
    background: ${(props) => props.theme.colors.display};
    border-radius: 10px;
    text-align: right;
    color: ${(props) => props.theme.colors.displayFontColor};
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 52px;
    letter-spacing: -0.933333px;
   @media(max-width: 768px) {
   
font-family: 'League Spartan';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 37px;
letter-spacing: -0.666667px;
   }
   }
  }
`;

export const DisplayTextStyle = styled.div`
            height: 128px;
            align-items: center;
            justify-content: flex-end;
            padding: 0px 20px;
            justify-items: center;
            width: 540px;
            display: flex;
   @media(max-width: 768px) {
            width: 327px;
            height: 88px;
   }
  }
`;

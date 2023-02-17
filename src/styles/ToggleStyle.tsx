import styled from "styled-components";
export const ToggleView = styled.div`
  display: inline-block;
  width: 71px;
  height: 26px;
  border-radius: 13px;
  position:absolute;
  background: #242D44;
  top: 5%;
  right: 29%;
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
  label {
  height: 16px;
  width: 16px;
  margin: 3px;
  line-height: 21px;
  border-radius: 50%;
  display:inline-block;
  position:relative;
  top: 5%;
  left: 5%;
  right: 2%;
  }
`;
export const ToggleNumber = styled.div`
  display: inline-block;
  position:absolute;
  top: 1%;
  right: 29%;
  label {
  height: 16px;
  width: 16px;
  margin: 3px;
  line-height: 21px;
  display:inline-block;
  position:relative;
  }
`;

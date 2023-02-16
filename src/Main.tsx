import * as React from "react";
import './App.css';
import ButtonContainerStyle from "./styles/ButtonContainerStyle";
import ButtonGrid from "./styles/ButtonGrid";
import {ButtonStyle} from "./styles/ButtonStyle";
import Calculator from "./styles/Calculator";
import {DisplayStyle} from "./styles/DisplayStyle";

type ButtonProps = {
}
   const Button  = () => {
return (
<ButtonStyle></ButtonStyle>
)
}
export default class Main extends React.Component<{}> {

render() {
  return (
  <Calculator>
  <DisplayStyle className="display">
   <div>12345</div>
  </DisplayStyle>
  <ButtonContainerStyle>
  <ButtonGrid className="button">
  <ButtonStyle>7</ButtonStyle>
  <ButtonStyle>8</ButtonStyle>
  <ButtonStyle>9</ButtonStyle>
  <ButtonStyle>=</ButtonStyle>
  <ButtonStyle>4</ButtonStyle>
  <ButtonStyle>5</ButtonStyle>
  <ButtonStyle>6</ButtonStyle>
  <ButtonStyle>+</ButtonStyle>
  <ButtonStyle>1</ButtonStyle>
  <ButtonStyle>2</ButtonStyle>
  <ButtonStyle>3</ButtonStyle>
  <ButtonStyle>-</ButtonStyle>
  <ButtonStyle>.</ButtonStyle>
  <ButtonStyle>0</ButtonStyle>
  <ButtonStyle>/</ButtonStyle>
  <ButtonStyle>x</ButtonStyle>
  <ButtonStyle>x</ButtonStyle>
  <ButtonStyle>x</ButtonStyle>
  </ButtonGrid></ButtonContainerStyle>
</Calculator>
  ) }
}


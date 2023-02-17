import React, { useEffect, useState } from "react";
import './App.css';
import { ThemeProvider } from "styled-components";
import {theme, theme2, theme3} from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import ButtonContainerStyle from "./styles/ButtonContainerStyle";
import ButtonGrid from "./styles/ButtonGrid";
import {ButtonStyle, EqualButton, ResetButton, LongButtonContainer} from "./styles/ButtonStyle";
import Calculator from "./styles/Calculator";
import ContextProvider from './Context';
import Display from './Display';
import { Context } from './Context';
import {ActionType} from './actions';
import {ToggleNumber, ToggleView} from './styles/ToggleStyle';

type ButtonProps = {
  children: React.ReactChild;
  value?: string;
  type: keyof typeof ActionType;
  isReset?: boolean;
  isEqual?: boolean;
  style?: any;
};
const Button = ({type, children, isReset, isEqual, style, value}: ButtonProps) => {
    const [, dispatch] = React.useContext(Context);
    const handleClick = () => {
        dispatch && dispatch({type: ActionType[type], payload: value?.toString() || children.toString() || '0'  });
    }
    if (isReset) {
        return (<ResetButton style={style} onClick={handleClick}>{children}</ResetButton>);
    }
    if (isEqual) {
        return (<EqualButton style={style} onClick={handleClick}>{children}</EqualButton>);
    }
    return (<ButtonStyle onClick={handleClick}>{children}</ButtonStyle>)
};


function App() {
     const [type, setType] = useState('2');
     const onThemeChange = (e:any) => {
     const themeNumber = e.target.value;
     console.log(typeof themeNumber);
      setType(themeNumber);
     }
     const getThemeType = () => {
         if(type === '2') {
          return theme;
         }
         else if(type === '3') {
          return theme2;
         }
         else if(type === '4') {
          return theme3;
         } else {
          return theme;
         }
     }
    return (
        <>
            <ThemeProvider theme={getThemeType}>
                <ContextProvider>
                    <GlobalStyle />
                    <Calculator>
                    <ToggleNumber>
                    </ToggleNumber>
                    <ToggleView>
                    <input type="radio" defaultChecked={true} name="toggle" onClick={onThemeChange} value="2"></input>
                    <label></label>
                    <input type="radio" onClick={onThemeChange} name="toggle" value="3"></input>
                    <label></label>
                    <input type="radio" onClick={onThemeChange} name="toggle" value="4"></input>
                    <label></label>
                    </ToggleView>
                    <Display/> 
                        <ButtonContainerStyle>
                            <ButtonGrid className="button">
                                <Button type="NUMBER">7</Button>
                                <Button type="NUMBER">8</Button>
                                <Button type="NUMBER">9</Button>
                                <Button type="DELETE">DEL</Button>
                                <Button type="NUMBER">4</Button>
                                <Button type="NUMBER">5</Button>
                                <Button type="NUMBER">6</Button>
                                <Button type="OPERATOR">+</Button>
                                <Button type="NUMBER">1</Button>
                                <Button type="NUMBER">2</Button>
                                <Button type="NUMBER">3</Button>
                                <Button type="OPERATOR">-</Button>
                                <Button type="DOT">.</Button>
                                <Button type="NUMBER">0</Button>
                                <Button type="OPERATOR">/</Button>
                                <Button type="OPERATOR">x</Button>
                            </ButtonGrid>

                            <LongButtonContainer>
                                <Button isReset={true} type="RESET" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>RESET</Button>
                                <Button isEqual={true} type="OPERATOR" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>=</Button>
                          </LongButtonContainer>
                        </ButtonContainerStyle>
                    </Calculator>
                </ContextProvider>
            </ThemeProvider>
        </>
    );
}

export default App;

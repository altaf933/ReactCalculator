import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import {theme} from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import ButtonContainerStyle from "./styles/ButtonContainerStyle";
import ButtonGrid from "./styles/ButtonGrid";
import {ButtonStyle, EqualButton, ResetButton} from "./styles/ButtonStyle";
import Calculator from "./styles/Calculator";
import DisplayStyle from "./styles/DisplayStyle";
import ContextProvider from './Context';
import Display from './Display';
import { Context } from './Context';
import {ActionType} from './actions';

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
        console.log(type);
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
    return (
        <>
            <ThemeProvider theme={theme}>
                <ContextProvider>
                    <GlobalStyle />
                    <Calculator>
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

                            <div style={{
                                display: 'flex',
                                fontFamily: 'League Spartan',
                                fontSize: 28,
                                fontWeight: 700,
                                color: '#ffffff'
                            }}>
                                <Button isReset={true} type="RESET" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>RESET</Button>
                                <Button isEqual={true} type="OPERATOR" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>=</Button>
                            </div>
                        </ButtonContainerStyle>
                    </Calculator>
                </ContextProvider>
            </ThemeProvider>
        </>
    );
}

export default App;

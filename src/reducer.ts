import {ACTION, ActionType, INITIAL_STATE, State} from "./actions";

export default function reducer (state: State, action: ACTION): State {
    const { type, payload } = action;

    switch(type)  {
     case ActionType.DOT: {
     let { isOperatorPressed, display} = state;
         if(isOperatorPressed) {
             return state;
         }
         if(!display.includes('.')) {
             display+='.';
         }
     return {
         ...state,
         display,
      };
     }
     case ActionType.NUMBER: {
     const { isOperatorPressed} = state;

     if(isOperatorPressed) {
        return {
            ...state,
            display: state?.display !== '0' ?  payload  :  state?.display + payload,
            isOperatorPressed: false,
        };
     }
     return {
        ...state,
        display: state.display=== '0' ? payload : state?.display + payload,
      };
     }

     case ActionType.OPERATOR: {

     const { payload } = action;
     let { display, operand1, isOperatorPressed, operator} = state;
     const inputValue = parseFloat(display);

     if(operator && isOperatorPressed) {
       return {...state, operator: payload}
     }
     if(operand1 === null) {
        operand1 = inputValue;
     } else if(operator) {
        display =  performCalculation[operator](operand1, inputValue).toString();
        operand1 = parseFloat(display);
     }

     return {
        ...state,
        display,
        operand1,
        operator: payload,
        isOperatorPressed: true,
      };
     }
     case ActionType.DELETE: {
     return {
        ...state,
        display: '0',
      };
     }
     case ActionType.RESET: {
     return {
         ...INITIAL_STATE,
      };
     }
    }  
     return {
        ...state,
        display: "0",
      };
}

type Operation = {
    [operator: string]: (firstOperand: number, secondOperand: number) => number
};

const performCalculation: Operation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "x": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
}


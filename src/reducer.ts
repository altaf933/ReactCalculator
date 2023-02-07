import {ACTION, ActionType, INITIAL_STATE, State} from "./actions";

export default function reducer (state: State, action: ACTION): State {
    const { type, payload} = action;
   
    switch(type)  {
     case ActionType.NUMBER: {
     return {
        ...state,
        display: state.display=== '0' ? payload : state?.display + payload,
        operand1: 1,
        opertand2: 2,
        operator: 'x'
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
        operand1: 1,
        opertand2: 2,
        operator: 'x'
      };
}

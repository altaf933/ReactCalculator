import React from 'react';
import { ACTION, INITIAL_STATE, State} from './actions';
import reducer from './reducer';


export const Context = React.createContext<
  [State, React.Dispatch<ACTION>] | [null, null]
>([null, null]);


function ContextProvider(props: React.PropsWithChildren<{}>) {
    const value = React.useReducer<React.Reducer<State, ACTION>>(reducer,  INITIAL_STATE)
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;


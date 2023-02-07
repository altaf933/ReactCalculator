export enum  ActionType {
        NUMBER = "NUMBER",
        OPERATOR = "OPERATOR",
        DOT = "DOT",
        DELETE = "DEL",
        RESET = "RESET",
}

export type ACTION = {
    type: ActionType;
    payload: string;
}

export type State = {
    display: string;
    operand1 : number | null;
    opertand2: number | null;
    operator: string | null;
}

export const INITIAL_STATE: State = {
  display: "0",
  operand1: null,
  opertand2: null,
  operator: null
};


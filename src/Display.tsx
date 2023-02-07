import React from 'react';
import DisplayStyle from './styles/DisplayStyle';
import { Context } from './Context';

const Display = () => {
const [state] = React.useContext(Context);
console.log(state?.display);

return (
        <DisplayStyle className="display">
            <div>{state?.display}</div>
        </DisplayStyle>);
}

export default Display;

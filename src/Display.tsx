import React from 'react';
import {DisplayStyle, DisplayTextStyle  } from './styles/DisplayStyle';
import { Context } from './Context';

const Display = () => {
const [state] = React.useContext(Context);

return (
        <DisplayStyle className="display">
        <DisplayTextStyle>
            {state?.display}
        </DisplayTextStyle>
        </DisplayStyle>);
}

export default Display;

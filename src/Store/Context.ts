import React from 'react';

import { State } from './State';


export const StateContext = React.createContext(State.createWithoutStateSetter());

export default StateContext;

import React, { useState } from 'react';

import { State, StateContext } from 'Store';
import { Page } from 'Widget';

import './App.css';


function App() {
  const [state, setState] = useState<State>(State.createWithoutStateSetter().addSomeTestData());
  state.setStateSetter(setState);

  return (
    <div className="App">
      <header className="App-header">
        <StateContext.Provider value={state}>
          <Page page={state.lastPageUsed()} />
        </StateContext.Provider>
      </header>
    </div>
  );
}

export default App;

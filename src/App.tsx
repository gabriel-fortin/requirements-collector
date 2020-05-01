import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { State } from 'Store';
import { Page } from 'Widget';
import { FieldType, Field } from 'Model';

import './App.css';


function App() {
  const identityOrDefault = (s: State | undefined, a: any) => s ?? new State();
  const initialState = new State();
  const ft1: FieldType = { kind: "text", multiLine: true, maxCharacters: 55 };
  const ft2: FieldType = { kind: "number", minValue: 0, maxValue: null };
  initialState.pageContent.content.push({id: -14, ...new Field(true, ft1, "home", "describe your home")});
  initialState.pageContent.content.push({id: -15, ...new Field(false, ft2, "age")});

  const reducer: (s: State | undefined, a: any) => State = identityOrDefault;
  const store = createStore(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Page page={store.getState().pageContent} />
        </Provider>
      </header>
    </div>
  );
}

export default App;

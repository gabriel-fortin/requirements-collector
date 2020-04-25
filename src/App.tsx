import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import State from './Store/State';
import Page from 'Widget/Page';

function App() {
  const identityOrDefault = (s: State | undefined, a: any) => s ?? new State();
  const initialState = new State();

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

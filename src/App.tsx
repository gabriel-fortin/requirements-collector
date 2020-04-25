import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import State from './Store/State';

function App() {
  const identityOrDefault = (s: State | undefined, a: any) => s ?? new State();
  
  const reducer: (s: State | undefined, a: any) => State = identityOrDefault;
  const store = createStore(reducer, new State());

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>

        </Provider>
      </header>
    </div>
  );
}

export default App;

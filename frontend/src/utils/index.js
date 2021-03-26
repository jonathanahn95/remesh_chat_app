import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../state/reducers/index';
import { HashRouter } from "react-router-dom";


const enhancer = compose(
  applyMiddleware(thunk),
);

const store = createStore(
  reducers,
  enhancer
);

export default function TestProvider({ children }) {
  return (
      <Provider store={store}>
        <HashRouter>
            {children}
        </HashRouter>
      </Provider>
  );
};
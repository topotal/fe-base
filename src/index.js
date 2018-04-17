import '@babel/polyfill';
import React from 'react';
import { injectGlobal } from 'styled-components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/App';

injectGlobal`
  html,
  body {
    background: black;
    color: white;
  }

  #Main {
    width: 100%;
    height: 100%;
  }
`;

const renderApp = () => {
  const target = document.getElementById('Main');
  if (target instanceof HTMLElement) {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      target,
    );
  }
};
renderApp();

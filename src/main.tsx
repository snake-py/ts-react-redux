import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './state';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

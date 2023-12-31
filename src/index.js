import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/index.js';
import App from './App';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./libs/react-redux/index";
import store from "./redux/store";

import App from "./containers/app-container";



  ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>,

document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


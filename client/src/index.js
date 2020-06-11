import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers/rootReducer';
import App from './App';
import {loadFaq} from './store/actions/faqActions';
import './normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
//	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
store.dispatch (loadFaq());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
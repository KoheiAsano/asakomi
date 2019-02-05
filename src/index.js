import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'components/Home';
import Condition from 'containers/Condition';
import Menstruation from 'containers/Menstruation';
import Calendar from 'containers/Calendar';
import Footer from 'containers/Footer';

import {BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'

import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/condition" component={ Condition } />
      <Route exact path="/menstruation" component={ Menstruation } />
      <Route exact path="/calendar" component={ Calendar } />
      <Route path="/:cPath?" component={ Footer } />
    </div>
  </BrowserRouter>
</Provider>,
  document.getElementById('root'));

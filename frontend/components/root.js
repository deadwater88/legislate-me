import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LegislateMe from './app';
import RootReducer from '../reducers/root_reducer';
import configureStore from '../store/store';
//
// const store = createStore(RootReducer);
//
// class Root extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <LegislateMe />
//       </Provider>
//     );
//   }
// }

const Root = ({ store }) => (
  <Provider store={store}>
      <LegislateMe />
  </Provider>
);

export default Root;

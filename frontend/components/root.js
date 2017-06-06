import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import React, {Component} from 'react';

import thunk from 'redux-thunk';
import App from './app';
import configureStore from '../store/store';

const store = configureStore();

class Root extends Component {

  render(){
    console.log("inside root");
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}
AppRegistry.registerComponent('legislate_me', () => Root);

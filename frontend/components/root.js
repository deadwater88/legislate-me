import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import React, {Component} from 'react';

import thunk from 'redux-thunk';
import AppContainer from './app_container';
import configureStore from '../store/store';


class Root extends Component {
  constructor(props){
    super(props);
  }

 render(){
   console.log("THIS IS STORE!!!!!!!!!!!!!!!!!!!!!!!!!", this.props.store);
    return (
      <Provider store={this.props.store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default Root;

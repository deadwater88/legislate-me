import { AppRegistry } from 'react-native';
import React, {Component} from 'react';

import configureStore from '../store/store';
import Root from './root';

const store = configureStore();
window.store = store;

const Entry = () => (
  <Root store={store} />
);

AppRegistry.registerComponent('legislate_me', () => Entry);

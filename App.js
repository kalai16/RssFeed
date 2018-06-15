import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import NavigationComponent from './app/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationComponent />
      </Provider>
    );
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator,addNavigationHelpers, } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import Detail from './FeedDetail';
import Header from './FeedHeader';

import { goBack } from '../actions';

export const Navigation= StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        header: <Header
          onPress={() => navigation.dispatch(goBack())}
          title=" Webview Feed "
        />,
      }),
    },
  },
  {

  },
);

class NavigationComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Navigation
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    nav: state.nav,
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);


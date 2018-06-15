import { NavigationActions } from 'react-navigation';
import { Navigation} from '../components';
import { navTypes } from '../actions';

const initialNavState = Navigation.router.getStateForAction(Navigation.router.getActionForPathAndParams('Home'));

export default (state = initialNavState, action) => {
  switch (action.type) {
    case navTypes.NAVIGATE: {
      const nextState = Navigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
        state,
      );
      return nextState;
    }
    case navTypes.BACK: {
      const newState = Navigation.router.getStateForAction(
        NavigationActions.back(),
        state,
      );

      return newState;
    }
    default:
      return state;
  }
};

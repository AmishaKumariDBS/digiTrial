import * as types from '../../actions/users';

import {login} from '../../components/Auth.js';

export default function(state={}, action) {

    switch(action.type) {
      case types.LOGIN_USER_SUCCESS:
        
        return action.data;
      default:
        return state;
    }
  
  }
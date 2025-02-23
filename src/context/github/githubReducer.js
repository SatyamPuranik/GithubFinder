// In reducer we will change the state depending upon the type that is sent in
import {
  SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING
} from '../types';

export default (state, action) => {
  // We are evaluting the type (using switch loop), depending upon which we will change our state
  switch(action.type){
    case SEARCH_USERS: 
    return{
      ...state,
      users: action.payload,
      loading: false
    }
    case CLEAR_USERS:
      return{
        ...state,
        users: [],
        loading: false
      }
    case GET_USER:
      return{
        ...state,
        user: action.payload,
        loading: false
      }
    case GET_REPOS:
      return{
        ...state,
        repos: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};
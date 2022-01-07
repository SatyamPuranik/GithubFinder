// All actions will come in this file

import React,{ useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING
} from '../types';

const GithubState = (props) => {
  // This is our initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  // GithubState will include all of our actions. What happens is we call an action it will for an instance make an request to github, get a response and then we dispatch a type back to our reducer.
  // Now in order to dispatch to our reducer, we need to use useReducer hook
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // All actions/functions will dispatch a object to reducer

  // Search user
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    // We are dispatching to reducer
    dispatch ({
      type: SEARCH_USERS,
      payload: res.data.items
    });

  };

  // Get user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);

   dispatch({
     type: GET_USER,
     payload: res.data
   });
  };

  // Get repos
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

  // Clear users
  const clearUsers = () => dispatch({type : CLEAR_USERS})

  // Set loading
  const setLoading = () => dispatch({type: SET_LOADING })
  // We only want our setLoading to dispatch to our reducer an object that has a type and a possible payload



  // We need to wrap our entire application in provider.
  // Provider will take one prop of value, in which we want to pass in anything that we want to make available to the entire app.
  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      getUser,
      clearUsers,
      getUserRepos
    }}
  >
    {props.children}
  </GithubContext.Provider>
};

export default GithubState;
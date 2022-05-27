import {
  SET_IMG,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_ASSERTIONS_NUMBER,
  SET_SCORE,
} from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  img: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_NAME:
    return {
      ...state,
      name: action.payload,
    };
  case SET_USER_EMAIL:
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case SET_ASSERTIONS_NUMBER:
    return {
      ...state,
      assertions: action.payload,
    };
  case SET_SCORE:
    return {
      ...state,
      score: action.payload + state.score,
      assertions: state.assertions + 1,
    };
  case SET_IMG:
    return {
      ...state,
      img: action.payload,
    };
  default:
    return state;
  }
};

export default playerReducer;

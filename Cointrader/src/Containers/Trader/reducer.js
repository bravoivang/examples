import {
  LOADED_RATES,
  LOADED_FAILURE_RATES,
  LOADING_RATES,
  SET_DATE,
  SET_BASE
} from './actions.js';

const initial = {
  loading : false,
  rates: [],
  date: new Date(),
  base: "USD",
};

export const tradeReducer = (prevState = initial, action) => {
  switch (action.type) {
    case LOADING_RATES : {
      console.log("|||||||| action: LOADING_RATES: payload: ", action.payload);
      return {
        ...prevState,
        loading : true,
      }
    }
    case LOADED_RATES : {
      console.log("|||||||| action: LOADED_RATES: payload: ", action.payload);
      return {
        rates : action.payload,
        loading : false,
      }
    }
    case LOADED_FAILURE_RATES : {
      console.log("|||||||| action: LOADED_FAILURE_RATES: payload: ", action.payload);
      return {
        ...prevState,
        loading : false,
      }
    }
    case SET_DATE : {
      console.log("|||||||| action: SET_DATE: payload: ", action.payload);
      return {
        ...prevState,
        date: action.payload
      }
    }
    case SET_BASE : {
      console.log("|||||||| action: SET_BASE: payload: ", action.payload);
      return {
        ...prevState,
        reference: action.payload
      }
    }
    default: {
      return prevState;
    }
  }
}
import { useSelector, useDispatch } from 'react-redux';
import {
  LOADED_RATES,
  LOADED_FAILURE_RATES,
  LOADING_RATES,
  SET_BASE,
  SET_DATE
} from './actions.js';
import moment from 'moment';


const EXCHANGE_RATE_API = 'https://api.exchangeratesapi.io';
//la pantalla incial llama a latest&base=USD

const useCurrencie = () => {
  console.log("useCurrencie!");
  return useSelector( state => {
    console.log("STATE: ", state);
    console.log("STATE.CURRENCIE: ", state.tradeReducer);
    return state.tradeReducer;
  });
}

const useSearch = () => {
  const dispatch = useDispatch();
  console.log("returning useSearch method!");
  return (date, base) => {
    console.log("useSearch called: Searching...!!");
    const history = date ? '/history' : '/latest';
    let params = [];
    //start_at=2018-01-01
    if (date) {
      params.push('start_at=' + toDateParam(date));
      params.push('end_at=' + toDateParam(new Date()));
    }
    if (base) params.push('base=' + base);

    dispatch({type: LOADING_RATES});
    fetch(EXCHANGE_RATE_API + history + (params.length > 0 ? '?' + params.join('&') : ""))
    .then( response => {
      return response.json();
    })
    .then( json => {
      dispatch({type : LOADED_RATES, payload: json.rates});
      console.log("LOAD DONDE: dispaching LOADED_RATES");
    })
    .catch( error => {
      console.error(error);
      dispatch({type: LOADED_FAILURE_RATES});
    });
  }
}

const useDate = () => {
  return useSelector( state => state.currencie.date);
}

const useReference = () => {
  return useSelector( state => state.currencie.reference);
}

const useSetDate = () => {
  const dispatch = useDispatch();
  return (newDate) => {
    console.log("settings date", newDate);
    dispatch({type: SET_DATE, payload: newDate});
  }
}

const useSetBase = () => {
  const dispatch = useDispatch();
  return (newBase) => {
    console.log("settings base", newBase);
    dispatch({type: SET_BASE, payload: newBase});
  }
}

const toDateParam = (date) => {
  const d = moment(date);
  return d.format('YY-MM-DD');
}

export {
  useCurrencie,
  useSearch,
  useSetDate,
  useSetBase,
}
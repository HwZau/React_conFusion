// import { PROMOTIONS } from '../shared/promotions';
import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
                                        errMess: null,
                                        promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
npm install redux@3.7.2
npm add react-redux@5.0.7
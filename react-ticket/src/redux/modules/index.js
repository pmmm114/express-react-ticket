import { combineReducers } from 'redux';
import users from './users';
import paginate from './paginate';
import ticket from './ticket';
import base from './base';
import auth from './auth';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    users,
    paginate,
    ticket,
    base,
    auth,
    pender: penderReducer
});
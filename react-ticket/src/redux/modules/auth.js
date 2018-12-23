 import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';

import * as api from 'lib/api';
// 액션 타입
const SET_LOGIN_INPUT = 'auth/SET_ID_INPUT';
const GET_TOKEN = 'auth/GET_TOKEN';
const SET_RESET_TOKENDATA = 'auth/SET_RESET_TOKENDATA';
const SET_TOKEN = 'auth/SET_TOKEN';
const GET_ME = 'auth/GET_ME';

// 액션 생성자
export const setLoginInput = createAction(SET_LOGIN_INPUT);
export const setRestTokenData = createAction(SET_RESET_TOKENDATA);
export const getToken = createAction(GET_TOKEN, api.getToken);
export const setToken = createAction(SET_TOKEN);
export const getMe = createAction(GET_ME, api.getMe)

// 초기 상태
const initialState = {
    loginForm: {
        id:'',
        pw:'',
    },
    tokenData: {
        auth: false,
        token: null,
    },
    sentEmail: false,
    userData: {
        UserId:'',
        password:'',
        email:'',
        participant:''
    }

};

const reducer = handleActions({
    [SET_LOGIN_INPUT]: (state, action) => {
        const { payload: {name, value} } = action;
        return produce(state, (draft) => {
            draft.loginForm[name]=value;
        });
    },
    [SET_RESET_TOKENDATA]: (state) => {
        return produce(state, (draft) => {
            draft.tokenData={auth: false, token: null};
        });
    },
    [SET_TOKEN]: (state, action) => {
        const {auth, token} = action.payload.data;
        return produce(state, (draft) => {
            draft.tokenData = { auth, token };
            console.log({ auth, token });
        })
    }
}, initialState);

export default applyPenders(reducer, [{
    type: GET_TOKEN,
    onSuccess: (state, action) => {
        return produce(state, (draft) => {
            draft.tokenData = action.payload;
        });
    }
},
{
    type: GET_ME,
    onSuccess: (state, action) => {
        return produce(state, (draft) => {
            draft.userData = action.payload;
        });
    }
}
]);
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';

import * as api from 'lib/api';

// 액션 타입
const GET_USERS = 'users/GET_USERS';
const UNLOAD_CONCERT = 'users/UNLOAD_CONCERT';

// 액션 생성자
export const getUsers = createAction(GET_USERS, api.getUsers);
export const unloadConcert = createAction(UNLOAD_CONCERT);

// 초기 상태
const initialState = {
    data: []
};

const reducer = handleActions({
    [UNLOAD_CONCERT]: (state, action) => {
        return initialState;
    },
}, initialState);

export default applyPenders(reducer, [{
    type: GET_USERS,
    onSuccess: (state, action) => {
        return produce(state, (draft) => {
            draft.data = action.payload.data;
        });
    }
}]);
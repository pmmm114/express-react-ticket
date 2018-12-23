import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';

// 액션 타입
const CREATE_PAGE = 'paginate/CREATE_PAGE';

// 액션 생성자
export const createPage = createAction(CREATE_PAGE);

// 초기 상태
const initialState = {
    currentPage: 1,
    pageSize: 8,
    totalElements: 1,
    totalPages: 1
};

export default handleActions({
    [CREATE_PAGE]: (state, action) => {
        return produce(state, (draft) => {
            const { payload } = action;
            draft.paginate.currentPage = payload;
        })
    }
}, initialState);
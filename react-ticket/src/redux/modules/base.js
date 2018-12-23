import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입
const ENTER_LANDING = 'base/ENTER_LANDING';
const EXIT_LANDING = 'base/EXIT_LANDING';

// 액션 생성자
export const enterLanding = createAction(ENTER_LANDING);
export const exitLanding = createAction(EXIT_LANDING);

// 초기 상태
const initialState = {
    landing: false,
};

export default handleActions({
    [ENTER_LANDING]: (state) => {
        return produce(state, (draft) => {
            draft.landing = !draft.landing;
        });
    },
    [EXIT_LANDING]: (state) => {
        return produce(state, (draft) => {
            draft.landing = false;
        });
    }
}, initialState);
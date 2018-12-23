import configureStore from './configureStore';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(typeof window === 'undefined' ? undefined : state);

export default store;
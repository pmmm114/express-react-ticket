import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
/* matchPath 이용, Data preload */
import App from '../shared/App';

import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux';

/* react-router-server 의 renderToString 은 비동기로 작동하며,
   데이터 로딩도 관리해줍니다. */
// import { renderToString } from 'react-router-server';
import ReactDOMServer from 'react-dom/server'
import configureRoute from '../configureRoute';

const render = async (req) => {
    const store = configureStore();

    const promises = [];
    const { originalUrl, url } = req;

    configureRoute.every((route) => {
        const match = matchPath(originalUrl, route);
        if(match) {
            if(route.preload) {
                promises.push(route.preload(req, store, match));
            }
            if(route.stop) return false;
        }
        return true;
    });

    try {
        await Promise.all(promises);
    } catch (e) {
        throw e;
    }
    
    const context = {};

    const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={url}>
                    <App/>
                </StaticRouter>
            </Provider>
    );

    // 스토어와, 렌더링된 문자열 결과물을 반환합니다
    return {
        html,
        state: store.getState()
    };
}

export default render;
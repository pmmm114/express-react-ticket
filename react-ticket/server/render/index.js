const fs = require('fs');
const path = require('path');
const render = require('./render').default; // ES6 형식으로 만들어진 모듈이므로, 뒤에 .default 를 붙여주어야합니다.
var serialize = require('serialize-javascript');

function buildHtml(rendered, state) {
    
    const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8'});

    const escaped = serialize(state).replace(/</g, '\\u003c');
    const page = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div><script>window.__PRELOADED_STATE__=${escaped}</script>`);
    
    return page;
}

const ssr = async (req) => {
    try{
        const { html, state } = await render(req);

        page = buildHtml(html, state);
        console.log(page);

    } catch(e) {
        console.log(e);
        page = buildHtml('',null);
    }

    return page;
};

module.exports = ssr;
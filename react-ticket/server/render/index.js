const render = require('./render').default; // ES6 형식으로 만들어진 모듈이므로, 뒤에 .default 를 붙여주어야합니다.

const manifest = require('../../build/asset-manifest.json');

function buildHtml(rendered, state) {
    // let scripts = '';
    let title = 'SSR Test';
    // if(rendered){
    //     scripts = ` <script>
    //                    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
    //                 </script>
    //                 <script src="assets/client.js"></script>
    //                 `
    //   } else {
    //     scripts = ` <script src="assets/bundle.js"> </script> `
    //   }
    const escaped = JSON.stringify(state).replace(/</g, '\\u003c');

    let page = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title> ${title} </title>
      <link href="${manifest['app.css']}" rel="stylesheet">
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${rendered}
      </div>
      ${
        state
          ? `<script>
        window.__PRELOADED_STATE__ = ${escaped}
      </script>`
          : ''
      }
      <script type="text/javascript" src="${manifest['app.js']}"></script>
    </body>
    </html>
    `;

    return page;
}

const ssr = async (req) => {
    let page;
    try{
        const { html, state } = await render(req);
        page = buildHtml(html, state);

    } catch(e) {
        page = buildHtml('', null);
    }

    return page;
};

module.exports = ssr;
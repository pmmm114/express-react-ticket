const express = require('express');
const app = express();
const path = require('path');
const ssr = require('./render/index');
const router = express.Router();
const PORT = 3001;

const distPath = path.resolve(__dirname+'/../build');

app.use('^/static', express.static(path.resolve(distPath, 'static')));

router.use('*', async (req, res) => {
    page = await ssr(req); 
    return res.send(page);
  }
);

app.use(router);
  
  app.listen(PORT, function () {
    console.log(`listening on port ${PORT}!`);
  });
  
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';

import './static/css/font1.css'
import './static/css/font2.css'
import './static/css/font-awesome.min.css'
import './static/css/et_line.css'
import './static/css/animate.css'
import './static/css/bootstrap.min.css'
import './static/css/venobox.css'
import './static/css/style.css'

const render = window.__PRELOADED_STATE__ ? ReactDOM.hydrate : ReactDOM.render;

render (<Root />, document.getElementById('root'));
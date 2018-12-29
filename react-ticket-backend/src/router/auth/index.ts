import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

auth.get('/', authCtrl.defaultExport);
auth.get('/test', authCtrl.test);

export default auth;
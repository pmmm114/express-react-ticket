import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

auth.get('/', authCtrl.defaultExport);
auth.get('/test', authCtrl.test);
auth.post('/login', authCtrl.postLogin);
auth.post('/register', authCtrl.register);
auth.get('/userlist', authCtrl.getUsers);
auth.post('/verifyTest', authCtrl.tokenVerifyTest);

export default auth;
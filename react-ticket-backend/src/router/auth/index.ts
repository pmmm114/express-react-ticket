import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

auth.get('/', authCtrl.defaultExport);
auth.get('/test', authCtrl.test);
auth.post('/login', authCtrl.getLogin);
auth.post('/register', authCtrl.register);
auth.get('/userlist', authCtrl.getUsers);

export default auth;
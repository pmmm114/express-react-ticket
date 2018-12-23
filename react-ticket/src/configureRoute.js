import { Home, ConcertList } from './pages';
import * as userActions from './redux/modules/users';
import { bindActionCreators } from 'redux';


const routes = [
    {
        path: '/concerts',
        preload: async (context, { dispatch }, match) => { // type
            const UserActions = bindActionCreators(userActions, dispatch);
            return UserActions.getUsers();
        }
    },
    {
        path: '/trade'
    }
];

export default routes;
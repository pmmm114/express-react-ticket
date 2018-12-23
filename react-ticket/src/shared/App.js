import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ConcertList, MyPage } from '../pages';

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/concerts" component={ConcertList}/>
            <Route path="/mypage" component={MyPage}/>
        </Switch>
    </React.Fragment>
);

export default App;
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

const dataProvider = simpleRestProvider('http://18rxkurawi.execute-api.us-east-1.amazonaws.com/dev/');
console.log("Test : "+dataProvider);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
);

export default App;
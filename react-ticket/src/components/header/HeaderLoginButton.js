import React from 'react';


// import { Button } from 'reactstrap';

const HeaderLoginButton = ({onLogin, test}) => {
    return (
        <button onClick={onLogin}>{test}</button>
    );
};

export default HeaderLoginButton;
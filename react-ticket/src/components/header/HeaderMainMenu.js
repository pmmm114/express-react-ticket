import React, { Component } from 'react';
import HeaderNavToggle from './HeaderNavToggle';
import HeaderNavCollapse from './HeaderNavCollapse';
import { Navbar } from 'react-bootstrap'

class HeaderMainMenu extends Component {
    render() {
        return (
            <Navbar className="mainmenu">
                <HeaderNavToggle/>
                <HeaderNavCollapse/>
            </Navbar>
        );
    }
}

export default HeaderMainMenu;
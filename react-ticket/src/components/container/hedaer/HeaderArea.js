import React, { Component } from 'react';
import HeaderBottom from '../../header/HeaderBottom';


class HeaderArea extends Component {
    render() {
        return (
            <div id="header_wrap" className="header_area">
                <HeaderBottom />
            </div>
        );
    }
}


export default HeaderArea;
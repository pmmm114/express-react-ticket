import React, { Component } from 'react';
import HeaderMainMenu from './HeaderMainMenu';
import HeaderSocialIcon from '../container/hedaer/HeaderSocialIcon';

class HeaderBottom extends Component {
    render() {
        return (
            <div className="header_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-7">
                            <HeaderMainMenu/>
                        </div>
                        <div className="col-md-4 col-sm-5">
                            <HeaderSocialIcon/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBottom;
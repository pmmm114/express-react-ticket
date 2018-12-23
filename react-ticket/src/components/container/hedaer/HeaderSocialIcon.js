import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as landingActions from '../../../redux/modules/base';
import * as authActions from '../../../redux/modules/auth';

import HeaderSearchbar from '../../header/HeaderSearchbar'
import HeaderLoginButton from '../../header/HeaderLoginButton'

class HeaderSocialIcon extends Component {
    onEnterLanding = () => {
        const { LandingActions } = this.props;
        LandingActions.enterLanding();
    };

    logoutButton = () => {
        const { AuthActions, LandingActions } = this.props;
        AuthActions.setRestTokenData();
        LandingActions.exitLanding();

    };
    
    render() {
        const { tokenData } = this.props;
        const { logoutButton, onEnterLanding } =this;
        let AuthorizationButton = 
        (tokenData.auth) 
        ?<HeaderLoginButton onLogin={logoutButton} test="Logout"/>
        :<HeaderLoginButton onLogin={onEnterLanding} test="Login"/>;

        return (
            <div className="header_social_icon">
                {AuthorizationButton}
                <HeaderSearchbar/>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        landing: state.base.landing,
        loginForm: state.auth.loginForm,
        tokenData: state.auth.tokenData,
    }),
    (dispatch) => ({
        LandingActions: bindActionCreators(landingActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch),
    })
)(HeaderSocialIcon));
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderArea from '../container/hedaer/HeaderArea';

import LandingTemplateContainer from '../container/auth/LandingTemplateContainer';

class PageTemplate extends Component {
    
    render() {
        const {landing, tokenData} = this.props;
        let LandingPage;
        console.log(landing+", "+tokenData.auth);
        
        LandingPage = (landing) ? <LandingTemplateContainer /> : null;
        LandingPage = ((!tokenData.auth) && (landing)) ? <LandingTemplateContainer />: null;
        
        let ChildrenPage = ((!tokenData.auth) && (landing)) ? null : this.props.children;

        return (
            <div className="index_six">
                <HeaderArea/>
                <main>
                    {LandingPage}
                    {ChildrenPage}
                </main>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        landing: state.base.landing,
        tokenData: state.auth.tokenData,
    })
)(PageTemplate));
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as authActions from '../../../redux/modules/auth';
import * as ticketActions from '../../../redux/modules/ticket';

class MyPage extends Component {
    componentWillMount() {
        const{ AuthActions, TicketActions, tokenData } = this.props;
        AuthActions.getMe(tokenData.token).then(userData => {TicketActions.myTickets(userData)});
    }

    render() {
        const {userData, tokenData, ticket}=this.props;
        console.log("My Page : "+ticket);
        if(!(tokenData.auth)) return null;
        return (
            <div className="container">
                <h2>마이페이지</h2>
                <h2>{ticket}</h2>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        tokenData: state.auth.tokenData,
        userData: state.auth.userData,
        ticket: state.ticket.ticket,
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        TicketActions: bindActionCreators(ticketActions, dispatch),
    })
)(MyPage));
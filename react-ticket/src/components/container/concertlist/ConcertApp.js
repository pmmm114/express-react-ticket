import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as usersActions from '../../../redux/modules/users';
import * as pagesActions from '../../../redux/modules/paginate';
import * as tradeActions from '../../../redux/modules/ticket';

import ConcertListWrapper from '../../concertlist/ConcertListWrapper';
import SingleConcert from '../../concertlist/SingleConcert';
import SingleConcertImg from '../../concertlist/SingleConcertImg';
import SingleConcertContent from '../../concertlist/SingleConcertContent';
import PaginateBox from '../../concertlist/PaginateBox';

class ConcertApp extends Component {
    initialize = async () => {
        const { UsersActions } = this.props;
        await UsersActions.getUsers();
    }

    componentDidMount() {
        const { data } = this.props;
        console.log("componentDidMount data : "+data);
    }

    handlePageNumber = (e) => {
        const { PagesActions } = this.props
        const number = e.currentTarget.dataset.number;
        console.log("number: "+number);
        PagesActions.createPage(number);
    }

    handleButtonMore = (e) => {
        const { TradeActions , ticket} = this.props;
        const newOwner = ticket.Owner;
        const test={ticket,newOwner};
        TradeActions.buyTickets(test);
    }
    render() {
        const { handlePageNumber, handleButtonMore } = this;
        const { data, currentPage } = this.props; // concert list

        console.log("render data: " + data);
        console.log("render page: " + currentPage);
        // console.log(page);

        const indexOfLastTodo = currentPage * 8;
        const indexOfFirstTodo = indexOfLastTodo - 8;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
        const tojsCurrentTodos = currentTodos;

        const concertList = tojsCurrentTodos.map(
            concert => 
            <SingleConcert key={concert.concertId}>
                <SingleConcertImg/>
                <SingleConcertContent
                onClick={handleButtonMore}
                concertTitle={concert.concertName}
                concertVenue={concert.location}/>
            </SingleConcert>
        );
        //유저 이름 목록을 생성합니다.

        return (
            <ConcertListWrapper>
                <h2>Test</h2>
                {concertList}
                <PaginateBox onClick={handlePageNumber}/>
            </ConcertListWrapper>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        data: state.users.data,
        currentPage: state.paginate.currentPage,
        ticket: state.ticket.ticket,
    }),
    (dispatch) => ({
        UsersActions: bindActionCreators(usersActions, dispatch),
        PagesActions: bindActionCreators(pagesActions, dispatch),
        TradeActions: bindActionCreators(tradeActions, dispatch)
    })
)(ConcertApp));
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaginateBox extends Component {
    render() {
        const {
            onClick
        } = this.props;
        return (
            <div className='paginate'>
                <Link to="/concerts?page=1" className="btn_num" data-number="1" onClick={onClick}><span>1</span></Link>
                <Link to="/concerts?page=2" className="btn_num" data-number="2" onClick={onClick}><span>2</span></Link>
            </div>
        );
    }
}

export default PaginateBox;
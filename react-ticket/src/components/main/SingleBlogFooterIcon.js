import React, { Component } from 'react';

class SingleBlogFooterIcon extends Component {
    render() {
        return (
                <a href="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className={this.props.SBD_cName}></i></a> 
        );
    }
}

export default SingleBlogFooterIcon;